const DataTable = ({ column, data }: { column: string[]; data: string[] }) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <section className="flex gap-2 border">
          {column.map((colName, index) => (
            <p key={index}>{colName}</p>
          ))}
        </section>
        <section className="flex gap-2 border">
          {data.map((data, index) => (
            <p key={index}>{data}</p>
          ))}
        </section>
      </div>
    </div>
  );
};

export default DataTable;
