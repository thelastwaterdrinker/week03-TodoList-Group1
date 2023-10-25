export default function RegisterForm() {
    return (
    <div>
        <div className="grid place-items-center">
            <div className="shadow-lg p-5 rounded-lg border-t-4 background-green-400">
                <h1 className="text-xl font-bold my-4">Registration</h1>
            </div>
        </div>

        <div className="shadow-lg p-5 rounded-lg border-t-4 grid place-items-center">
            <div className="flex flex-row gap-1">
                <div>
                    <h1 className="text-xl font-bold my-4">Email</h1>
                    <form className="flex flex-col gap-3">
                        <input type="text" placeholder="Email"/>
                    </form>
                </div>
                
                <div className="flex flex-col">
                    <div>
                    <h1 className="text-xl font-bold my-4">Password</h1>
                    <form>
                        <input type="password" placeholder="Password"/>
                    </form></div>
                    <div>
                        <button className="bg-black text-white font-bold cursor-pointer px-6 py-2 my-1">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}