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
  nombre?: string;
  resetPasswordLink?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";


export const TemplateReseteoPassword = ({
  nombre,
  resetPasswordLink,
}: Props) => {
  return (
    <Html>
      <Head />
      <Preview>Sacoba: Resetea tu contraseña</Preview>
      <Tailwind>
        <Body className="bg-[#f6f9fc] p-3">
          <Container className="bg-[#ffffff] p-10">
            <Img
              src={`${baseUrl}/public/logo.png`}
              width="40"
              height="33"
              alt="Logo Sacoba"
            />
            <Section>
              <Text className="text-lg font-sans">Hola {nombre},</Text>
              <Text className="text-lg font-sans">
                Alguien ha solicitado recientemente un cambio de contraseña para
                tu cuenta de Dropbox. Si has sido tú, puedes establecer una
                nueva contraseña aquí:
              </Text>
              <Button className="bg-[#e09145] font-sans text-center px-4 py-3 text-xl cursor-pointer" href={resetPasswordLink}>
                Restablecer contraseña
              </Button>
              <Text className="text-lg font-sans">
                Si no deseas cambiar tu contraseña o no solicitaste esto,
                simplemente ignora y elimina este mensaje.
              </Text>
              <Text className="text-lg font-sans">
                Para mantener tu cuenta segura, por favor no reenvíes este
                correo electrónico a nadie. Consulta nuestro Centro de Ayuda
                para
                <Link  href="https://dropbox.com">
                  obtener más consejos de seguridad.
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default TemplateReseteoPassword;