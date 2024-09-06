const Admin = ()=>{
  return(
    <div className="bg-gray-300 h-screen flex justify-center items-center">
        <div className="flex justify-center items-center gap-10">
         <img src="/images/admin.jpg" className="w-96 h-96 rounded-2xl" />

          <div>
            <h1 className="text-3xl font-semibold flex flex-col">Admin console</h1>
              <form className="flex flex-col gap-5">
                <input type="text" 
                required
                   placeholder="Enter admin secret"
                   className="border p-2 bg-white rounded-md w-[350px] mt-6 text-gray-700"
                />
                <button className="py-2 px-6 bg-[#FF735C]  w-fit rounded-md text-white">Access Now</button>
              </form>
          </div>

        </div>
    </div>
  )
}
export default Admin;