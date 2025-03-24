const SubjectLoadDetails = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-3 w-[1000px]">
        <h1 className="font-bold text-xl">Course</h1>
        <section className="flex flex-col w-[500px]">
          <span className="flex border p-2">
            <h1 className="w-[160px] text-center">Subject Code</h1>
            <h1 className="w-[240px] text-center">Subject Name</h1>
            <h1 className="w-[100px] text-center">Units</h1>
          </span>
          <span className="flex border p-1">
            <h1 className="w-[160px] text-center">IT601</h1>
            <h1 className="w-[240px] text-center">Major Elective</h1>
            <h1 className="w-[100px] text-center">03</h1>
          </span>
        </section>
      </div>
    </div>
  );
};

export default SubjectLoadDetails;
