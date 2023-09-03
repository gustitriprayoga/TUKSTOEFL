<?php

namespace App\Repositories\MasterData;

use App\Models\Exam\Grade;
use App\Repositories\Contracts\MasterData\GradeInterface;
use App\Repositories\BaseRepository;

class GradeRepository extends BaseRepository implements GradeInterface
{
    /**
     * @var
     */
    protected $model;

    public function __construct(Grade $grade)
    {
        $this->model = $grade;
    }

    public function getAllPaginatedWithParams($params, $limit = 10)
    {
        $grades = $this->model->query();
        if(isset($params->search) && !empty($params->search)) $grades->where('title', 'like', '%' . $params->search . '%');
        $grades = $grades->orderBy('created_at', 'DESC')->paginate($limit);
        return $grades;
    }
}
