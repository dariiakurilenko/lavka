'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { formRegisterSchema, TFormRegisterValues } from "./modals/auth-modal/forms/schema";
import { User } from "@prisma/client";
import toast from "react-hot-toast";
import { signOut } from "next-auth/react";
import { Container } from "./container";
import { Title } from "./title";
import { FormInput } from "./form-components";
import { Button } from "../ui";
import { updateUserInfo } from "@/app/actions";


interface Props {
   data: User;
}

export const ProfileForm: React.FC<Props> = ({ data }) => {
    const form = useForm({
        resolver: zodResolver(formRegisterSchema),
        defaultValues: {
            fullName: data.fullName,
            email: data.email,
            password: '',
            confirmPassword: '',
        },
    });

    const onSubmit = async (data: TFormRegisterValues) => {
        try{
            await updateUserInfo({
                email: data.email,
                fullName: data.fullName,
                password: data.password,
            });

            toast.success('Данные обновлены!')
        } catch(error){
            return toast.error('Ошибка при обновлении данных...')
        }

        
    }

    const onClickSignOut = () => {
        signOut({
            callbackUrl: '/'
        })
    }
    return (
       <Container className="my-10">
            <Title text={`Личные данные | #` + data.id } size='md' className='font-bold'/>

            <FormProvider {...form}>
                <form className="flex flex-col gap-5 w-96 mt-10" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormInput name='email' label='E-Mail' required />
                    <FormInput name='fullName' label='Полное имя' required />
                    <FormInput type='password' name='password' label='Новый пароль' required/>
                    <FormInput type='password' name='confirmPassword' label='Повторите пароль' required/>

                    <Button disabled={form.formState.isSubmitting} className="text-base mt-10" type='submit'>
                        Сохранить
                    </Button>

                    <Button
                        onClick={onClickSignOut}
                        variant='secondary'
                        disabled={form.formState.isSubmitting}
                        className="text-base"
                        type='button'
                    >
                        Выйти
                    </Button>

                </form>
            </FormProvider>
       </Container>
    );
};