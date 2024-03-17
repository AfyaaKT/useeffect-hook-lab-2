
export default function Form({setInput , input}) {
  return (
    <form>
      <h3>Search user Github</h3>
      <div className="mb-3">
        <label>User name</label>
        <input type="text"
         className="form-control"
          placeholder="User Name"
          onChange={(e)=>setInput(e.target.value)} />
      </div>
    </form>
  );
}
