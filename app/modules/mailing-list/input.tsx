"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { ChevronRight, Check, LoaderCircle, X } from "lucide-react";

import { useState } from "react";

const formSchema = z.object({
  email: z.string().email(),
});

const MailInput = () => {
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<boolean>(false);
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setSubmitLoading(true);
      const { data: response } = await axios.post(`/api/mailing-list/`, {
        email: values.email,
      });
      console.log(response);
      setSubmitError(false);
      setSubmitSuccess(true);
      setSubmitLoading(false);
    } catch (error) {
      setSubmitSuccess(false);
      setSubmitError(true);
      setSubmitLoading(false);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-[22rem] relative"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="Email address..." {...field} />
              </FormControl>
              {form.formState.errors.email && (
                <p className="text-xs text-red-600 w-full">
                  {form.formState.errors.email.message}
                </p>
              )}
              {/*Message to show signup was successful */}
              {submitSuccess && (
                <div className="flex text-sm items-center gap-2">
                  <Check color="green" size={20} />
                  <p>Signup successful! Welcom to TLP.</p>
                </div>
              )}
              {/*Message to show something went wrong when signing up */}
              {submitError && (
                <div className="flex text-sm items-center gap-2">
                  <X color="red" size={20} />
                  <p>Something went wrong. Please try again.</p>
                </div>
              )}
            </FormItem>
          )}
        />
        <button
          type="submit"
          className="py-2 absolute right-1 hover:scale-110 hover:ease-in"
          disabled={submitLoading}
        >
          {submitLoading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <ChevronRight color="#949494" className="hover:stroke-white" />
          )}
        </button>
      </form>
    </Form>
  );
};

export default MailInput;
