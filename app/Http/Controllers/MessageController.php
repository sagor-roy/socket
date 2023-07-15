<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MessageController extends Controller
{
    public function all($id)
    {
        try {
            $data = Message::where(function ($query) use ($id) {
                $query->where('from', $id)->orWhere('to', $id);
            })->where(function ($query) {
                $query->where('to', Auth::id())->orWhere('from', Auth::id());
            })->get();

            return response()->json($data);
        } catch (Exception $error) {
            return $this->responseError($error->getMessage());
        }
    }

    public function store(Request $request)
    {
        try {
            $message = Message::create([
                'to' => Auth::id(),
                'from' => $request->from,
                'message' => $request->message
            ]);
            return response()->json($message);
        } catch (Exception $error) {
            return $this->responseError($error->getMessage());
        }
    }
}
