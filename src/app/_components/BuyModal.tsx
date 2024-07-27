import React, {useState} from 'react'

type Props = {
    name : string,
    disc : string | null,
    stock  : number,
    price: number,
    toggleModal : () => void
}

const BuyModal: React.FC<Props> = ({name, disc, stock, price, toggleModal}) => {

    const [count, setCount] = useState<number>(1)

    return (
    <div>
        <div id="default-modal" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-20 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-700/50" onClick={toggleModal}></div>
        <div className="fixed top-[20%] left-[30%] p-4 w-full max-w-2xl max-h-full z-50 t-[20%] r-[20%]">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {name}
                    </h3>
                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={toggleModal}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <div className="p-4 md:p-5 space-y-4">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        {disc == null ? "説明は特にありません" : disc}
                    </p>
                    <div className='flex'>
                        <div className='flex'>
                        { count > 0 ?
                            <div className='p-2 mr-4' >
                                <button onClick={() => setCount(count > 0 ? count - 1 : count)} className='text-2xl'> - </button>
                            </div>
                            :
                            <div className='p-2 mr-4'>
                                <button onClick={toggleModal}>🗑️</button>
                            </div>
                        }
                            <h1 className='text-3xl'>{ count }</h1>
                            <div className='p-2 ml-4'>
                                <button onClick={() => setCount(count + 1 <= stock ? count+1 : stock)} className='text-2xl'> + </button>
                            </div>
                        </div>
                        <div className='text-3xl ml-[auto] mr-[20%]'>
                            ￥{price * count}
                        </div>
                    </div>
                </div>
                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button  data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">カートに入れる</button>
                    <button onClick={toggleModal} data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">戻る</button>
                </div>
            </div>
        </div>
    </div>
    )
}


export default BuyModal;