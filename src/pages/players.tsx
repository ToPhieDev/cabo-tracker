import { FormEvent, useState } from "react";
import { Form, Input, Button } from "@heroui/react";

import DefaultLayout from "@/layouts/default";
type FormValues = Record<string, FormDataEntryValue>;

export default function PlayersPage() {
  const [submitted, setSubmitted] = useState<FormValues | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as FormValues;

    setSubmitted(data);
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full">
        <div className="inline-block max-w-lg text-center justify-center w-full">
          <Form className="w-full" onSubmit={onSubmit}>
            <Input
              label="Spieler 1"
              name="player1"
              placeholder="Name des Spielers"
              type="text"
            />
            <Input
              label="Spieler 2"
              name="player2"
              placeholder="Name des Spielers"
              type="text"
            />
            <Input
              label="Spieler 3"
              name="player3"
              placeholder="Name des Spielers"
              type="text"
            />
            <Button variant={"light"} onPress={() => {}}>
              Weiteren Spieler hinzufügen
            </Button>
            <Button color={"success"} type="submit">
              Start
            </Button>
            {submitted && (
              <div className="text-small text-default-500">
                You submitted: <code>{JSON.stringify(submitted)}</code>
              </div>
            )}
          </Form>
        </div>
      </section>
    </DefaultLayout>
  );
}
