<?php

namespace App\Http\Requests\MasterData;

use Illuminate\Foundation\Http\FormRequest;

class GradeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'user_id' => 'required|string|max:191',
            'duration' => 'required',
            'number' => 'required',
            'section' => 'required',
            'total_section' => 'required',
            'start_time' => 'required',
            'end_time' => 'required',
            'total_correct' => 'required',
            'grade' => 'required',
            'answers' => 'required',
            'is_finished' => 'required',
            'total_tolerance' => 'required',
            'is_blocked' => 'required',
        ];
    }

    public function attributes()
    {
        return [
            'user_id' => __('grade.userid'),
            'duration' => __('grade.duration'),
            'number' => __('grade.number'),
            'total_section' => __('grade.total_section'),
            'start_time' => __('grade.start_time'),
            'end_time' => __('grade.end_time'),
            'total_correct' => __('grade.total_correct'),
            'grade' => __('grade.grade'),
            'is_finished' => __('grade.is_finished'),
            'total_tolerance' => __('grade.total_tolerance'),
            'is_blocked' => __('grade.is_blocked'),
        ];
    }
}
