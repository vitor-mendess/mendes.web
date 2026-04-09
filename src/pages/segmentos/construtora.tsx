import SegmentPage from "../../components/SegmentPage";

export default function Construtora() {
  return (
    <SegmentPage
      title="Clientes procuram construtoras no Google diariamente"
      subtitle="Sua empresa está aparecendo?"
      description="Tenha um site profissional para sua construtora e atraia mais obras e clientes."
      heroImage="/imgs/segmentos/construtora.webp"

      section1Title="Atraia mais obras e clientes"
      section1Text="Um site profissional para construtoras aumenta a visibilidade da sua empresa no Google e facilita que clientes encontrem seus serviços de construção, reformas e projetos."
      section1Cards={[
        {
          title: "Mais obras",
          description: "Captação de novos projetos.",
        },
        {
          title: "Portfólio",
          description: "Exiba obras realizadas.",
        },
        {
          title: "Contato rápido",
          description: "Orçamento facilitado.",
        },
      ]}

      section2Title="Fortaleça sua imagem"
      section2Text="Mostre projetos concluídos, depoimentos, especialidades e estrutura da empresa."
      section2Cards={[
        {
          title: "Credibilidade",
          description: "Mais confiança do cliente.",
        },
        {
          title: "Portfólio visual",
          description: "Fotos e vídeos das obras.",
        },
        {
          title: "Profissionalismo",
          description: "Imagem premium.",
        },
      ]}

      section3Title="SEO e marketing"
      section3Text="Clientes pesquisam por reformas, construções e empreiteiras no Google diariamente."
      section3Cards={[
        {
          title: "Google",
          description: "Mais visibilidade.",
        },
        {
          title: "Leads",
          description: "Mais orçamentos.",
        },
        {
          title: "Autoridade",
          description: "Empresa consolidada.",
        },
      ]}

      investmentTitle="Por que investir?"
      investmentText="Um site para construtora é essencial para gerar confiança, apresentar obras realizadas e captar novos projetos."
    />
  );
}