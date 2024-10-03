import React from 'react'

const EformSiblings = () => {
    return (
        <div>
            <div className='p-10 pt-3'>
                <form action="" className='flex-row pb-4 border-4 flex flex-col border-black '>
                    <div className='bg-slate-900 text-white text-center pb-5 pt-5 border-b-4 border-black w-[100%]'>
                        <p>SIBLING'S INFORMATION</p>
                    </div>
                    <div className='flex flex-row gap-[10px] py-3 px-[5rem] '>
                        <div className='flex flex-col p-5 gap-3 w-[700px]  '>
                            <label htmlFor="" className='text-center'>BROTHERS/SISTERS' NAME</label>
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                        </div>
                        <div className='flex flex-col p-5 gap-3 w-[150px]'>
                            <label htmlFor="" className='text-center'>AGE</label>
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                        </div>
                        <div className='flex flex-col p-5 gap-3 w-[700px]'>
                            <label htmlFor="" className='text-center'>SCHOOL/OCCUPATION</label>
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                        </div>
                    </div>

                </form>
            </div >
        </div >
    )
}

export default EformSiblings