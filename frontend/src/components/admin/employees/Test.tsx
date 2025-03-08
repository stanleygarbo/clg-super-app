import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";
import { proxy, useSnapshot } from "valtio";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const data = proxy<{ items: string[] }>({ items: [] });

function additem(item: string) {
  return new Promise((resolve) => {
    data.items.push(item);
    resolve(item);
  });
}

function deleteitem(index: number) {
  return new Promise((resolve) => {
    const filter = data.items.filter((items, i) => {
      return index != i;
    });
    data.items = filter;
    resolve(filter);
  });
}

const Test = () => {

  const addMutation = useMutation({
    mutationFn: additem,
    onSuccess: () => {
      toast.success("added successfully");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteitem,
    onSuccess: () => {
      toast.success("deleted successfully");
    },
  });

  const form = useForm<{ item: string }>();


  return (
    <div className="p-40">
      <h1>Employee Details</h1>
      {data.items.map((item, index) => (
        <section key={index} className="flex gap-3">
          <p className="bg-red-500">{item}</p>
          <button
            onClick={() => {
              deleteMutation.mutate(index);
            }}
            type="button"
            className="p-1 px-3 bg-red-600"
          >
            Delete
          </button>
        </section>
      ))}

      <form
        onSubmit={form.handleSubmit((value) => {
          addMutation.mutate(value.item);
        })}
        className="m-40"
      >
        <input type="text" placeholder="New Item" {...form.register("item")} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Test;
