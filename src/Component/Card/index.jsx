import { Context } from "../../Context"
import { useContext } from "react"
import { PlusIcon } from '@heroicons/react/24/solid'


const Card = (data)=>{
    const context = useContext(Context)
    const showProduct = (show) =>{
        context.isOpenShoppingCart()
        context.setShowProductCart(show)

    }
    const showProductToCart = (event, botton)=>{
        event.stopPropagation
        context.setCount(context.count + 1)
        context.setShowCart([...context.showCart, botton])
        console.log(context.showCart);
    }

    return(
        <section 
        className='bg-white cursor-pointer w-56 h-60 rounded-lg'
        onClick={()=>showProduct(data.data)}
        >
            <figure className='relative mb-2 w-full h-4/5' >
                <img className=' w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt="" />
                <div  className='absolute w-6 h-6 top-0 right-0 p-2 bg-blue-100 rounded-full flex justify-center m-2 items-center'
                onClick={(event)=>{
                    showProductToCart(event, data.data)
                }
                    }
                > <PlusIcon className= 'h-6 w-6 text-black cursor-pointer' />
                </div>

                <span className='absolute bottom-0 left-0 rounded-lg  bg-yellow-50 text-black text-xs m-2 px-3 py-0.5'> {data.data.title}  </span>
                  </figure>

                <p className='flex justify-between'>
                    <span className='text font-light'> {data.data.description} </span>
                    <span className='text-lg font-medium'> ${data.data.price} </span>
                </p>
          

        </section>
    )
}

export default Card