import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton(props: IconButtonProps){
    return (
        <button
            {...props} 
            //className='bg-black/20 border border-white/10 rounded-md p-1.5'>
            //{props.children}
            className={twMerge(
                'bg-black/20 border border-white/10 rounded-md p-1.5',
                props.disabled ? 'opacity-50' : null,
            )}
        />
    )
}