function resultReport(marks) {
    let student = {
        total_mark: 0,
        pass_sub: 0,
        fail_sub: 0

    };
    for (const mark of marks) {
        student.total_mark += mark;
        if (mark >= 40) student.pass_sub++;
        else student.fail_sub++;
    }
    student.total_mark = Math.round((student.total_mark) / (student.pass_sub + student.fail_sub));
    console.log(student)

}
resultReport([98, 87, 67, 91, 92, 33, 87]);