import Layout from "@/components/layouts/Layout";
import Button from "@/components/common/Button";
import { useRouter } from "next/router";

import type { PageRouteProps } from "@/interface";

export default function Home() {
  const router = useRouter();

  const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute);
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Splash App!
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Explore AI-powered text generation, images, and more.
        </p>

        <div className="flex gap-6">
          <Button
            action={() => routeToNextPage({ pageRoute: "/generate-text-ai" })}
            buttonLabel="Generate Text"
            buttonBackgroundColor="blue"
            buttonSize="lg"
          />

          <Button
            action={() => routeToNextPage({ pageRoute: "/text-to-image" })}
            buttonLabel="Text to Image"
            buttonBackgroundColor="green"
            buttonSize="lg"
          />

          <Button
            action={() => routeToNextPage({ pageRoute: "/contact" })}
            buttonLabel="Contact Us"
            buttonBackgroundColor="orange"
            buttonSize="lg"
          />
        </div>
      </div>
    </Layout>
  );
}
