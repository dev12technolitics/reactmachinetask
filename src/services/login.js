/* eslint-disable no-console */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "./api";

export const useCreateAccount = () => {
  const queryClient = useQueryClient();
  const { mutate, isSuccess, data, isLoading, isError } = useMutation(
    (data) => {
      const formData = data;
      return api.post("", formData);
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["_createAccount"]);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return {
    createAccount: mutate,
    data: data,
    isSuccess,
    isError,
    isLoading,
  };
};

export const useLoginUser = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    (data) => {
      const formData = data;
      return api.post("", formData);
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["_LoginUser"]);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
  return {
    loginUser: mutate,
    isLoading,
  };
};
