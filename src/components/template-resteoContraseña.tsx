import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface Props {
  token: string;
}


export const TemplateReseteoPassword = ({ token }: Props) => {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}/Login/NuevaPassword?token=${token}`
    : `http://localhost:3000/Login/NuevaPassword?token=${token}`;

  return (
    <Html>
      <Head />
      <Preview>Sacoba: Resetea tu contraseña</Preview>
      <Tailwind>
        <Body className="bg-[#f6f9fc] p-3">
          <Container className="bg-[#ffffff] p-10">
            <Img
              src={`${baseUrl}/static/logo.png`}
              width="40"
              height="33"
              alt="Logo Sacoba"
            />
            <Section>
              <Text className="text-lg font-sans">
                Alguien ha solicitado recientemente un cambio de contraseña para
                tu cuenta de{" "}
                <Link
                  href="https://www.sacoba.es/"
                  className="underline text-colorBase"
                >
                  Sacoba
                </Link>
                . Si has sido tú, puedes establecer una nueva contraseña aquí:
              </Text>
              <Button
                className="bg-[#e09145] font-sans text-center px-4 py-3 text-xl cursor-pointer text-black"
                href={baseUrl}
              >
                Restablecer contraseña
              </Button>
              <Text className="text-lg font-sans">
                Te dejamos 10 minutos para acceder a este enlace. No olvides que
                sólo puedes utilizarlo una vez. Más seguro, imposible.
              </Text>
              <Text className="text-lg font-sans">
                Si no deseas cambiar tu contraseña o no solicitaste esto,
                simplemente ignora y elimina este mensaje.
              </Text>
              <Text className="text-lg font-sans">
                Para mantener tu cuenta segura, por favor no reenvíes este
                correo electrónico a nadie.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default TemplateReseteoPassword;
