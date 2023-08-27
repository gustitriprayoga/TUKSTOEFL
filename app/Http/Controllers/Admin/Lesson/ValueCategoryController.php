<?php

namespace App\Http\Controllers\Admin\Lesson;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\Contracts\Lesson\ValueCategoryInterface as ValueCategoryService;
use App\Services\Contracts\MasterData\CategoryInterface as CategoryService;
use App\Http\Requests\Lesson\ValueCategoryRequest;

class ValueCategoryController extends Controller
{
    protected $valueCategoryService, $categoryService;

    public function __construct(ValueCategoryService $valueCategoryService, CategoryService $categoryService)
    {
        $this->valueCategoryService = $valueCategoryService;
        $this->categoryService = $categoryService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return inertia('Admin/Lesson/ValueCategory/Index', [
            'valueCategories' => $this->valueCategoryService->getAllPaginatedWithParams($request)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Admin/Lesson/ValueCategory/Create', [
            'categories' => $this->categoryService->all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ValueCategoryRequest $request)
    {
        try {
            #store
            $this->valueCategoryService->create($request);

            #Bump....
            return redirect()->route('admin.value-categories.index');

        } catch(\Exception $e) {
            #get message
            session()->flash('failed', $e->getMessage() . ' in file :'.$e->getFile() .' line: '. $e->getLine());

            #redirect
            return redirect()->back()->withInput($request->all());
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        if(!$this->valueCategoryService->find($id)) return abort('404', 'uppss....');

        return inertia('Admin/Lesson/ValueCategory/Edit', [
            'valueCategory' => $this->valueCategoryService->find($id),
            'categories' => $this->categoryService->all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ValueCategoryRequest $request, $id)
    {
        try {
            if(!$this->valueCategoryService->find($id)) return abort('404', 'uppss....');

            #update
            $this->valueCategoryService->update($request, $id);

            #Bump....
            return redirect()->route('admin.value-categories.index');

        } catch(\Exception $e) {
            #get message
            session()->flash('failed', $e->getMessage() . ' in file :'.$e->getFile() .' line: '. $e->getLine());

            #redirect
            return redirect()->back()->withInput($request->all());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            #delete
            $this->valueCategoryService->delete($id);

            #Bump....
            return redirect()->route('admin.value-categories.index');

        } catch(\Exception $e) {
            #get message
            session()->flash('failed', $e->getMessage() . ' in file :'.$e->getFile() .' line: '. $e->getLine());

            #redirect
            return redirect()->back()->withInput($request->all());
        }
    }
}
