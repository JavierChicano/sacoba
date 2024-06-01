import { TemplateReseteoPassword } from '@/components/template-resteoContraseña';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { data, error } = await resend.emails.send({
    from: 'Sacoba <no-reply@sacoba.es>',
    to: [body.correoElectronico],
    subject: "Actualiza tu contraseña",
    react: TemplateReseteoPassword({ token: body.token }),
    text: "",
  });

  if (error) {
    return Response.json({ error });
  }

  return Response.json(data);
}