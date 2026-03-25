const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config({
  path: '../.env'
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

transporter.verify((error) => {
  if (error) {
    console.error('Email error:', error);
  } else {
    console.log('Server ready to send emails');
  }
});

app.post('/form', async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      message,

      howDidYouFindOutAboutUs,
      projectType,
      otherProjectType,
      aboutTheProperty,
      whatDoYouIntendToDo,
      demolishOrBuildWalls,
      planOfTheProperty,
      investmentRange,
      desiredAreas,
      propertyType,
      dimensions,
      architectureStyle,
      references,
      lightingProject,
      deadline,
      legalApproval,
      constructionMonitoring,
      hasAnExecutionTeam,
      wantToChange
    } = req.body;

    const mailText = `
📌 Pré-briefing
Nome: ${name}
Whatsapp: ${phone}
E-mail: ${email}

📐 Detalhes do projeto
Como nos conheceu: ${howDidYouFindOutAboutUs}
Tipo de projeto: ${projectType}
Outro tipo de projeto: ${otherProjectType || '—'}
Sobre o imóvel: ${aboutTheProperty}
O que você pretende fazer no espaço: ${whatDoYouIntendToDo}
Pretende trocar: ${wantToChange}
Será necessário demolir ou construir paredes: ${demolishOrBuildWalls}
Possui planta do imóvel: ${planOfTheProperty}
Faixa de investimento: ${investmentRange}
Ambientes: ${desiredAreas}
Tipo de imóvel: ${propertyType}
Medidas gerais do ambiente: ${dimensions}
Estilo de arquitetura: ${architectureStyle}
Deseja projeto de iluminação/luminotécnica?: ${lightingProject}
Qual o prazo desejado para a conclusão do projeto?: ${deadline}
Precisa de aprovação legal?: ${legalApproval}
Precisa de acompanhamento de obra?: ${constructionMonitoring}
Possui equipe de execução?: ${hasAnExecutionTeam}

📝 Referências
${references || '—'}

📝 Mensagem
${message}
`;

    // Email para você
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      cc: process.env.EMAIL_CC,
      replyTo: email,
      subject: '📩 New formulário Pré-Briefing',
      text: mailText
    });

    // Email de confirmação para o usuário
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Recebemos o seu formulário ✔️',
      text: `Olá ${name},

      Recebemos o seu formulário.
      Em breve entraremos em contato...`
    });

    return res.status(200).json({ message: 'Enviado com sucesso!' });

  } catch (error) {
    console.error('Form error:', error);
    return res.status(500).json({ error: 'Falha no envio!' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
