<?php

namespace App\Exports;
use App\Models\Exam;
use App\Models\User;
use App\Models\Exam\Grade;

use Maatwebsite\Excel\Concerns\FromCollection;

class ExamExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return
    }
}
