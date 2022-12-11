import {useForm, SubmitHandler} from "react-hook-form"

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

type Props = {

}

export default function ContactMe({}: Props) {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:pukeraimbows@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    }

  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl
    px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-pink text-2xl">Contact</h3>
        <div className="flex flex-col space-y-10">
            <h4 className="text-4xl font-semibold text-center">If you have something to say, <span className="decoration-pink/80 underline">say it.</span></h4>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
            <div className="flex space-x-2">
                <input 
                    {...register('name')}
                    className="contactInput"
                    placeholder="Name"
                    type="text" 
                />
                <input 
                    {...register('email')}
                    className="contactInput"
                    placeholder="Email"
                    type="email"
                />
            </div>
            <input 
                {...register('subject')}
                className="contactInput"
                placeholder="Subject"
                type="text"
            />
            <textarea {...register('message')} placeholder="Message" className="contactInput"/>
            <button className="bg-pink py-5 px-10 rounded-md text-black font-bold text-lg" type="submit">Submit</button>
        </form>
    </div>
  )
}