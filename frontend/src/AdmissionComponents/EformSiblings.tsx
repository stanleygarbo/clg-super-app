const EformSiblings = () => {
  return (
    <div className="p-3">
      <p className="font-bold">SIBLING'S INFORMATION</p>
      <div
        className="grid gap-[10px] px-6 py-3"
        style={{ gridTemplateColumns: "1fr 100px 1fr" }}
      >
        <label htmlFor="" className="text-center">
          BROTHERS/SISTERS' NAME
        </label>
        <label htmlFor="" className="text-center">
          AGE
        </label>
        <label htmlFor="" className="text-center">
          SCHOOL/OCCUPATION
        </label>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
    </div>
  );
};

export default EformSiblings;
