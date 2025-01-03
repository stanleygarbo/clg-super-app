import { useSnapshot } from "valtio";
import { userData } from "../../store/UserData";

const AddUser = () => {
  const snap = useSnapshot(userData);
  return (
    <div className="grid grid-rows-1 gap-3">
      <span className="relative rounded-lg">
        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
          Name
        </p>
        <input
          type="text"
          required
          value={snap.name}
          onChange={(e) => {
            userData.name = e.target.value;
          }}
          className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
        />
      </span>

      <section className="grid grid-cols-2 gap-3">
        <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            USN
          </p>
          <input
            type="text"
            required
            value={snap.usn}
            onChange={(e) => {
              userData.usn = e.target.value;
            }}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          />
        </span>
        <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            Role
          </p>
          <select
            value={snap.role}
            required
            onChange={(e) => {
              userData.role = e.target.value;
            }}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          >
            <option value=" "> </option>
            <option value="User">User</option>
            <option value="Student">Student</option>
            <option value="Admin">Admin</option>
            <option value="Admission">Admission</option>
            <option value="Accountin">Accounting</option>
            <option value="Registrar">Registrar</option>
            <option value="Faculty">Faculty</option>
            <option value="Clinic">Clinic</option>
            <option value="SCC">SCC</option>
            <option value="Super">Super</option>
          </select>
        </span>
      </section>
      <section className="grid grid-cols-1 gap-3">
        <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            Password
          </p>
          <input
            type="password"
            required
            value={snap.password}
            onChange={(e) => {
              userData.password = e.target.value;
            }}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          />
        </span>
        <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            Confirm Pass
          </p>
          <input
            type="password"
            required
            value={snap.confirmPass}
            onChange={(e) => {
              userData.confirmPass = e.target.value;
            }}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          />
        </span>
      </section>
    </div>
  );
};

export default AddUser;
