import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { formLoginSchema, TFormLoginValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, FormInput, Title } from "@/shared/components";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";


interface Props {
    onClose?: VoidFunction;
}

export const LoginForm: React.FC<Props> = ({onClose}) => {

    const form = useForm<TFormLoginValues>({
        resolver: zodResolver(formLoginSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    })

    const onSubmit = async (data: TFormLoginValues) => {
        try {
            const resp = await signIn('credentials', {
                ...data,
                redirect: false,
            });

            if (!resp?.ok){
                throw Error();
            }
            toast.success('Вы успешно вошли в аккаунт!')
            onClose?.();
        } catch (error) {
            console.error('Error [LOGIN]', error);
            toast.error('Не удалось войти в аккаунт...')
        }
    }
    return (
        <FormProvider {...form}>
            <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
                <div className='flex justify-between items-center'>
                    <div className="mr-2">
                        <Title text='Вход в аккаунт' size='md' className='font-bold' />
                        <p className="text-gray-400">Введите свою почту, чтобы войти в аккаунт</p>
                    </div>
                </div>

                <FormInput name='email' label='E-Mail' required />
                <FormInput name='password' label='Пароль' type='password' required />

                <Button
                    className="h-12 text-base" type='submit' loading={form.formState.isSubmitting}>
                        Войти
                </Button>
            </form>
        </FormProvider>
    );
};