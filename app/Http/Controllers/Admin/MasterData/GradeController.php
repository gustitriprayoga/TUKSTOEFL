<?php

namespace App\Http\Controllers\Admin\MasterData;

use App\Http\Controllers\Controller;
use App\Models\Exam\Grade;
use App\Services\Contracts\MasterData\GradeInterface as GradeService;
use App\Http\Requests\MasterData\GradeRequest;
use Illuminate\Http\Request;

class GradeController extends Controller
{

    protected $gradeService;

    public function __construct(GradeService $gradeService)
    {
        $this->gradeService = $gradeService;
    }

    public function index()
    {
        return inertia('Admin/Grade/Index', [
            'grades' => $this->gradeService->getAllPaginatedWithParams($request)
        ]);
    }
}
