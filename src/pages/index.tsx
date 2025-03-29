import { Button, Link } from "@heroui/react";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Der Begleiter&nbsp;</span>
          <span className={title()}>für euren Spieleabend:&nbsp;</span>
          <br/>
          <span className={title({ color: "green" })}>Punkt-o-Cabo&nbsp;</span>
          <div className={subtitle({ class: "mt-4" })}>
            Einfach und schnell deine Punkte in Cabo tracken.
          </div>
        </div>
        <div className="mt-8">
          <Button as={Link} color={"success"} href={"/players"}>
            Los gehts
          </Button>
        </div>
      </section>
    </DefaultLayout>
  );
}
