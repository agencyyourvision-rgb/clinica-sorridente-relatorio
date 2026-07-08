import React, { useState } from "react";
import {
  Eye, Heart, Megaphone, UserRound, Users, FileText,
  ArrowUpRight, ArrowDownRight, TrendingUp, CalendarCheck,
  Smile, XCircle, AlertTriangle, RotateCcw, ArrowRight, Target,
  Video, CircleDollarSign, Info, Trophy, SlidersHorizontal,
  BarChart3, ListChecks, CalendarRange, Rocket, ChevronRight, ChevronLeft, Check,
  MessageCircle, Camera, Gift, Globe, Bot, Award, UserPlus, Layers, Repeat, BookOpen, MousePointerClick, Quote, ChevronDown, CircleDot,
  ClipboardCheck, Compass, Download, Zap, GraduationCap
} from "lucide-react";

// ---------- tokens ----------
const bg = "#FAFBFC";
const surface = "#FFFFFF";
const border = "#E5E9F0";
const ink = "#0B1220";
const muted = "#667085";
const mutedSoft = "#98A2B3";
const blue = "#2563EB";
const blueSoft = "#EFF4FF";
const blueLine = "#BFD3FE";
const green = "#16A34A";
const greenSoft = "#EDF9F1";
const red = "#DC2626";
const redSoft = "#FDEEEE";
const violet = "#7C3AED";
const violetSoft = "#F3EEFF";
const rose = "#DB2777";
const roseSoft = "#FDF0F7";
const roseLine = "#F5C2DD";

const display = "'Manrope', sans-serif";
const body = "'Inter', sans-serif";

// ---------- dados de redes sociais ----------
const monthly = [
  { month: "Fevereiro", short: "Fev", visualizacoes: 7219, alcance: 1524, interacoes: 397, visitasPerfil: 182, contasEnvolvidas: 93, publicacoes: 10 },
  { month: "Março", short: "Mar", visualizacoes: 8645, alcance: 1927, interacoes: 648, visitasPerfil: 216, contasEnvolvidas: 165, publicacoes: 10 },
  { month: "Abril", short: "Abr", visualizacoes: 8589, alcance: 1593, interacoes: 363, visitasPerfil: 203, contasEnvolvidas: 98, publicacoes: 11 },
  { month: "Maio", short: "Mai", visualizacoes: 8974, alcance: 1648, interacoes: 394, visitasPerfil: 197, contasEnvolvidas: 115, publicacoes: 12 },
  { month: "Junho", short: "Jun", visualizacoes: 6598, alcance: 1673, interacoes: 266, visitasPerfil: 122, contasEnvolvidas: 92, publicacoes: 11 },
];

const totals = { visualizacoes: 40025, alcance: 8365, interacoes: 2068, visitasPerfil: 920, contasEnvolvidas: 563, publicacoes: 54 };
const growth = { visualizacoes: 654, alcance: 1085, interacoes: 1346, visitasPerfil: 624 };
const baseline = { visualizacoes: 5305, alcance: 706, interacoes: 143, visitasPerfil: 127 };

const current = monthly[monthly.length - 1];

// metas acordadas no início do projeto, comparadas com o crescimento acumulado desde o baseline
const METAS = [
  { key: "alcance", icon: Megaphone, label: "Alcance", goal: 30, achieved: growth.alcance },
  { key: "interacoes", icon: Heart, label: "Engajamento", goal: 25, achieved: growth.interacoes },
  { key: "visitasPerfil", icon: UserRound, label: "Visitas ao perfil", goal: 50, achieved: growth.visitasPerfil },
];
const BONUS_METRIC = { key: "visualizacoes", icon: Eye, label: "Visualizações", achieved: growth.visualizacoes };

const TOP_PUBLICACOES = [
  {
    titulo: "Hoje existem várias soluções que permitem recuperar o sorriso, mesmo em casos avançados.",
    formato: "Reel", data: "22 de junho", views: 700, likes: 37, naoSeguidores: 71.9, watchTime: "1h 19m 54s",
  },
  {
    titulo: "Hoje, existem soluções seguras e eficazes que permitem devolver a confiança no sorriso.",
    formato: "Reel", data: "6 de maio", views: 792, likes: 35, naoSeguidores: 55.5, watchTime: "1h 41m 28s",
  },
];

const AJUSTES_PUBLICACOES = [
  "Aumentar a produção de reels: são o formato que mais gera partilhas e alcance fora da base de seguidores.",
  "Apostar em conteúdo de topo de funil, pensado para quem ainda não conhece a clínica, já que os melhores reels têm mais de metade do alcance em não-seguidores.",
  "Explorar o Reels Teste da Meta, para validar estes conteúdos junto de novos públicos antes da publicação definitiva.",
  "Publicar com maior regularidade: o próprio Instagram sinalizou queda de frequência de publicações nas últimas semanas, um fator que também pesa no alcance.",
];

const METAS_CONTRATUAIS = [
  { nome: "Alcance das publicações", pct: 100, tone: "green", statusLabel: "Meta alcançada" },
  { nome: "Visualizações de conteúdo", pct: 100, tone: "green", statusLabel: "Meta alcançada" },
  { nome: "Interações nas redes sociais", pct: 100, tone: "green", statusLabel: "Meta alcançada" },
  { nome: "Visitas ao perfil", pct: 100, tone: "green", statusLabel: "Meta alcançada" },
  { nome: "Alcance de novos utilizadores", pct: 100, tone: "green", statusLabel: "Meta alcançada" },
  { nome: "Crescimento da comunidade (seguidores)", pct: 80, tone: "amber", statusLabel: "Em evolução" },
  { nome: "CTRs de tráfego pago", pct: 90, tone: "amber", statusLabel: "Em otimização" },
];

// evolução do projeto por área, para a página de Ações MKT360
const EVOLUCAO_PROJETO = [
  { nome: "Comunicação", pct: 100, tone: "green", statusLabel: "Consolidada" },
  { nome: "Conteúdo", pct: 100, tone: "green", statusLabel: "Consolidado" },
  { nome: "Website", pct: 100, tone: "green", statusLabel: "Consolidado" },
  { nome: "Atendimento", pct: 100, tone: "green", statusLabel: "Consolidado" },
  { nome: "Formações", pct: 70, tone: "amber", statusLabel: "Em implementação" },
  { nome: "Tráfego Pago", pct: 90, tone: "amber", statusLabel: "Em otimização" },
  { nome: "Novo Sistema", pct: 80, tone: "amber", statusLabel: "Em implementação" },
  { nome: "IA", pct: 30, tone: "blue", statusLabel: "Próxima fase" },
];

// ---------- dados operacionais das clínicas ----------
const CLINIC_DATA = {
  "Tires": {
    "Mai/2026": { agendadas: 716, realizadas: 541, canceladas: 135, faltas: 17, remarcadas: 0, canceladosUnicos: 126, recuperadosCancel: 32, naoRegressaramCancel: 94, faltasUnicos: 16, recuperadosFalta: 7, naoRegressaramFalta: 9 },
    "Jun/2026": { agendadas: 644, realizadas: 462, canceladas: 134, faltas: 18, remarcadas: 20, canceladosUnicos: 128, recuperadosCancel: 32, naoRegressaramCancel: 96, faltasUnicos: 16, recuperadosFalta: 5, naoRegressaramFalta: 11 },
  },
  "Santo António": {
    "Mai/2026": { agendadas: 500, realizadas: 369, canceladas: 100, faltas: 18, remarcadas: 0, canceladosUnicos: 95, recuperadosCancel: 23, naoRegressaramCancel: 72, faltasUnicos: 18, recuperadosFalta: 3, naoRegressaramFalta: 15 },
    "Jun/2026": { agendadas: 503, realizadas: 377, canceladas: 97, faltas: 21, remarcadas: 0, canceladosUnicos: 93, recuperadosCancel: 23, naoRegressaramCancel: 70, faltasUnicos: 21, recuperadosFalta: 7, naoRegressaramFalta: 14 },
  },
  "Cabeço de Mouro": {
    "Mai/2026": { agendadas: 231, realizadas: 176, canceladas: 47, faltas: 6, remarcadas: 0, canceladosUnicos: 44, recuperadosCancel: 11, naoRegressaramCancel: 33, faltasUnicos: 6, recuperadosFalta: 3, naoRegressaramFalta: 3 },
    "Jun/2026": { agendadas: 203, realizadas: 149, canceladas: 35, faltas: 7, remarcadas: 12, canceladosUnicos: 34, recuperadosCancel: 9, naoRegressaramCancel: 25, faltasUnicos: 7, recuperadosFalta: 2, naoRegressaramFalta: 5 },
  },
};

const CLINIC_UNITS = ["Geral", "Tires", "Santo António", "Cabeço de Mouro"];
const CLINIC_PERIODS = ["Mai/2026", "Jun/2026"];

function getClinicStats(unit, period) {
  if (unit === "Geral") {
    const keys = ["agendadas", "realizadas", "canceladas", "faltas", "remarcadas", "canceladosUnicos", "recuperadosCancel", "naoRegressaramCancel", "faltasUnicos", "recuperadosFalta", "naoRegressaramFalta"];
    const acc = {};
    keys.forEach(k => acc[k] = 0);
    Object.values(CLINIC_DATA).forEach(u => {
      const d = u[period];
      keys.forEach(k => acc[k] += d[k]);
    });
    return acc;
  }
  return CLINIC_DATA[unit][period];
}

function pctChange(curr, prev) {
  if (!prev) return 0;
  return ((curr - prev) / prev) * 100;
}

function fmt(n) {
  return n.toLocaleString("pt-PT");
}

function ChangeBadge({ value }) {
  const positive = value >= 0;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 3,
      fontFamily: body, fontSize: 13, fontWeight: 600,
      color: positive ? green : red,
      background: positive ? greenSoft : redSoft,
      padding: "3px 8px", borderRadius: 999
    }}>
      {positive ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
      {positive ? "+" : ""}{value.toFixed(1)}%
    </span>
  );
}

function MonthCard({ icon: Icon, label, value, change }) {
  return (
    <div style={{
      background: surface, border: `1px solid ${border}`, borderRadius: 16,
      padding: "20px 22px", display: "flex", flexDirection: "column", gap: 14
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{
          width: 34, height: 34, borderRadius: 10, background: blueSoft,
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <Icon size={17} color={blue} strokeWidth={2} />
        </div>
        <ChangeBadge value={change} />
      </div>
      <div>
        <div style={{ fontFamily: body, fontSize: 12.5, color: muted, marginBottom: 4 }}>{label}</div>
        <div style={{ fontFamily: body, fontSize: 28, fontWeight: 700, color: ink, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>
          {fmt(value)}
        </div>
      </div>
    </div>
  );
}

function BaselineCard({ icon: Icon, label, value, growthPct }) {
  return (
    <div style={{
      background: surface, border: `1px solid ${border}`, borderRadius: 20,
      padding: "26px 26px", display: "flex", flexDirection: "column", gap: 18,
      position: "relative", overflow: "hidden"
    }}>
      <div style={{
        position: "absolute", top: -40, right: -40, width: 140, height: 140,
        borderRadius: "50%", background: blueSoft, opacity: 0.6, filter: "blur(6px)"
      }} />
      <div style={{ display: "flex", alignItems: "center", gap: 10, position: "relative" }}>
        <div style={{
          width: 38, height: 38, borderRadius: 11, background: blue,
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <Icon size={18} color="#fff" strokeWidth={2} />
        </div>
        <span style={{ fontFamily: body, fontSize: 13.5, color: muted, fontWeight: 500 }}>{label}</span>
      </div>
      <div style={{ position: "relative" }}>
        <div style={{ fontFamily: body, fontSize: 38, fontWeight: 800, color: ink, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>
          {fmt(value)}
        </div>
        {growthPct != null ? (
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 8 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 3, fontFamily: body,
              fontSize: 14, fontWeight: 700, color: green
            }}>
              <ArrowUpRight size={15} /> +{growthPct}%
            </span>
            <span style={{ fontFamily: body, fontSize: 12, color: mutedSoft }}>desde o baseline</span>
          </div>
        ) : (
          <div style={{ fontFamily: body, fontSize: 12, color: mutedSoft, marginTop: 8 }}>desde o baseline</div>
        )}
      </div>
    </div>
  );
}

function MetaCard({ icon: Icon, label, goal, achieved, note }) {
  const markerPct = Math.min(Math.max((goal / achieved) * 100, 3), 92);
  const multiplier = achieved / goal;
  return (
    <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 18, padding: "24px 24px 30px", display: "flex", flexDirection: "column", gap: 4 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 4 }}>
        <div style={{ width: 32, height: 32, borderRadius: 9, background: blueSoft, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon size={15} color={blue} strokeWidth={2} />
        </div>
        <span style={{ fontFamily: body, fontSize: 13, fontWeight: 600, color: ink }}>{label}</span>
      </div>

      <div style={{ fontFamily: body, fontSize: 34, fontWeight: 800, color: green, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em", marginTop: 6 }}>
        +{achieved}%
      </div>
      <div style={{ fontFamily: body, fontSize: 12, color: mutedSoft, marginBottom: 14 }}>meta acordada: +{goal}%</div>

      <div style={{
        display: "inline-flex", alignItems: "center", gap: 5, fontFamily: body, fontSize: 12.5, fontWeight: 700,
        color: "#8A5A00", background: "#FEF6E7", padding: "5px 11px", borderRadius: 999, width: "fit-content", marginBottom: 22
      }}>
        <Trophy size={13} /> {multiplier.toFixed(1)}x acima da meta
      </div>

      <div style={{ position: "relative" }}>
        <div style={{ position: "relative", background: "#F1F4F8", borderRadius: 999, height: 12 }}>
          <div style={{ width: "100%", height: "100%", background: `linear-gradient(90deg, ${greenSoft}, ${green})`, borderRadius: 999 }} />
          <div style={{ position: "absolute", top: -4, bottom: -4, left: `${markerPct}%`, width: 2.5, background: ink, opacity: 0.5, borderRadius: 2 }} />
        </div>
        <div style={{
          position: "absolute", top: "100%", left: `${markerPct}%`, transform: "translateX(-50%)", marginTop: 7,
          fontFamily: body, fontSize: 10.5, fontWeight: 700, color: muted, whiteSpace: "nowrap"
        }}>
          ↑ meta
        </div>
      </div>

      {note && <p style={{ fontFamily: body, fontSize: 11, color: mutedSoft, marginTop: 26, lineHeight: 1.5 }}>{note}</p>}
    </div>
  );
}

function FunnelStage({ icon: Icon, label, value, tone }) {
  const tones = {
    blue: { bg: blueSoft, fg: blue },
    green: { bg: greenSoft, fg: green },
    red: { bg: redSoft, fg: red },
    amber: { bg: "#FEF6E7", fg: "#B7791F" },
  };
  const t = tones[tone] || tones.blue;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, minWidth: 108 }}>
      <div style={{
        width: 46, height: 46, borderRadius: 13, background: t.bg,
        display: "flex", alignItems: "center", justifyContent: "center"
      }}>
        <Icon size={20} color={t.fg} strokeWidth={2} />
      </div>
      <div style={{ fontFamily: body, fontSize: 20, fontWeight: 800, color: ink, fontVariantNumeric: "tabular-nums" }}>
        {fmt(value)}
      </div>
      <div style={{ fontFamily: body, fontSize: 11.5, color: muted, textAlign: "center", lineHeight: 1.3 }}>
        {label}
      </div>
    </div>
  );
}

function SectionTitle({ children, eyebrow, noMargin, large }) {
  return (
    <div style={{ marginBottom: noMargin ? 0 : 6 }}>
      {eyebrow && (
        <div style={{ fontFamily: body, fontSize: large ? 12 : 11, fontWeight: 700, color: blue, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: large ? 6 : 4 }}>
          {eyebrow}
        </div>
      )}
      <h2 style={{ fontFamily: display, fontSize: large ? 27 : 19, fontWeight: 800, color: ink, margin: 0, letterSpacing: "-0.015em" }}>
        {children}
      </h2>
    </div>
  );
}

function Caption({ children, wide }) {
  return (
    <p style={{ fontFamily: body, fontSize: 13, color: mutedSoft, margin: "8px 0 24px", maxWidth: wide ? 680 : 560, lineHeight: 1.6 }}>
      {children}
    </p>
  );
}

function PartDivider({ number, title, description }) {
  return (
    <div style={{
      background: `linear-gradient(135deg, ${ink} 0%, #17243B 100%)`, borderRadius: 20,
      padding: "34px 34px", marginBottom: 44, position: "relative", overflow: "hidden"
    }}>
      <div style={{
        position: "absolute", top: -60, right: -40, width: 220, height: 220,
        borderRadius: "50%", background: "rgba(37,99,235,0.35)", filter: "blur(50px)"
      }} />
      <div style={{ position: "relative" }}>
        <div style={{ fontFamily: body, fontSize: 11, fontWeight: 700, color: blueLine, textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 9 }}>
          {`Parte ${number}`}
        </div>
        <h2 style={{ fontFamily: display, fontSize: 25, fontWeight: 800, color: "#fff", margin: 0, letterSpacing: "-0.015em" }}>
          {title}
        </h2>
        <p style={{ fontFamily: body, fontSize: 13.5, color: "#B8C4D9", marginTop: 9, maxWidth: 640, lineHeight: 1.65 }}>
          {description}
        </p>
      </div>
    </div>
  );
}

const RECOMMENDATIONS = [
  {
    icon: Video,
    title: "Mais reels de topo de funil",
    objetivo: "Aumentar o saldo líquido de seguidores, ganhando mais do que perdemos.",
    acao: "Produzir reels sem foco em agendamento, pensados para quem ainda não nos conhece.",
    impacto: ["Mais alcance a não seguidores", "Crescimento líquido da comunidade"],
  },
  {
    icon: Camera,
    title: "Reservar dias de gravação",
    objetivo: "Sustentar a produção de mais reels.",
    acao: "Bloquear um dia fixo por mês para gravações com a equipa.",
    impacto: ["Conteúdo sempre pronto", "Menos interrupções na clínica"],
  },
  {
    icon: Users,
    title: "Mostrar mais a equipa",
    objetivo: "Aproveitar o formato que mais gera reação do público.",
    acao: "Produzir mais vídeos com rostos da equipa e bastidores do dia a dia.",
    impacto: ["Mais proximidade com o público", "Maior confiança na marca"],
  },
  {
    icon: CircleDollarSign,
    title: "Reativar os anúncios",
    objetivo: "Transformar interesse em novas consultas.",
    acao: "Assim que a conta Meta for regularizada, lançar campanhas focadas em geração de leads.",
    impacto: ["Mais leads qualificados", "Melhor uso do investimento"],
  },
  {
    icon: Bot,
    title: "Preparar chat de atendimento automático",
    objetivo: "Melhorar a experiência de quem contacta a clínica, com resposta rápida e online.",
    acao: "Ter um assistente automático pronto a responder de imediato, sobretudo quando o fluxo de leads dos anúncios arrancar.",
    impacto: ["Resposta imediata a leads", "Melhor experiência do utilizador"],
  },
  {
    icon: Zap,
    title: "Reels Teste como alcance grátis",
    objetivo: "Alcançar não seguidores sem gastar em notoriedade.",
    acao: "Testar os reels antes de publicar, e reservar o orçamento só para campanhas de leads.",
    impacto: ["Alcance orgânico extra", "Investimento mais eficiente"],
  },
  {
    icon: GraduationCap,
    title: "Formação em gestão de leads",
    objetivo: "Converter mais contactos em consultas marcadas.",
    acao: "Reforçar o treino da equipa em resposta rápida e follow-up.",
    impacto: ["Resposta mais rápida", "Mais consultas marcadas"],
  },
  {
    icon: ClipboardCheck,
    title: "Validação antecipada",
    objetivo: "Garantir comunicação consistente, sem atrasos.",
    acao: "Validar os conteúdos assim que disponíveis no Rella.",
    impacto: ["Publicações mais consistentes", "Calendário sem interrupções"],
  },
  {
    icon: Compass,
    title: "Expansão para o TikTok",
    objetivo: "Alcançar novos públicos e aumentar a notoriedade.",
    acao: "Publicar conteúdo educativo adaptado à plataforma, com a conta já criada.",
    impacto: ["Alcance a novos públicos", "Reforço da autoridade digital"],
  },
  {
    icon: RotateCcw,
    title: "Recuperação de pacientes cancelados",
    objetivo: "Reduzir vagas perdidas e melhorar a retenção.",
    acao: "Criar contacto de acompanhamento e lembretes automáticos para quem cancelou.",
    impacto: ["Menos vagas perdidas", "Mais pacientes recuperados"],
  },
];

const NAV = [
  { id: "redes-sociais", label: "Resultados Redes Sociais", icon: BarChart3 },
  { id: "acoes-mes", label: "Ações MKT360 (Maio - Junho)", icon: ListChecks },
  { id: "plano-anual", label: "Planeamento", icon: CalendarRange },
  { id: "proximos-passos", label: "Próximos Passos", icon: Rocket },
];

// dashboard executivo: contagens reais, derivadas das implementações listadas
// infraestrutura de marketing implementada, ao longo dos 5 meses desde o início do Marketing 360 (fevereiro a junho)
const INFRA_KPIS = [
  { icon: CalendarRange, label: "Meses de implementação", value: 5, detalhe: "Fevereiro, Março, Abril, Maio e Junho" },
  { icon: Target, label: "Áreas estratégicas desenvolvidas", value: 5, detalhe: "Comunicação, Produção, Captação, Website e Automações" },
  { icon: Globe, label: "Plataformas estruturadas", value: 5, detalhe: "WhatsApp Business, Instagram, Meta Ads, Website e Rella" },
  { icon: RotateCcw, label: "Processos implementados", value: 5, detalhe: "Atendimento, respostas automáticas, planeamento editorial, gestão de leads e formação da equipa" },
  { icon: Gift, label: "Campanhas desenvolvidas", value: 2, detalhe: "Dia da Mãe e Dia da Criança" },
  { icon: Bot, label: "Ferramentas configuradas", value: 5, detalhe: "WhatsApp Business, mensagens automáticas, formulário Meta, Rella e Reels Teste" },
];

const INFRA_CONSTRUIDO = [
  { icon: MessageCircle, area: "Comunicação", itens: ["WhatsApp Business", "Perfil profissional", "Mensagens automáticas", "Estrutura de atendimento"] },
  { icon: Camera, area: "Marketing", itens: ["Planeamento editorial", "Produção contínua de conteúdos", "Campanhas sazonais", "Organização da comunicação"] },
  { icon: CircleDollarSign, area: "Publicidade", itens: ["Estrutura Meta Ads", "Formulários de captação", "Estrutura de geração de leads"] },
  { icon: Globe, area: "Website", itens: ["Casos de Sucesso", "Cartão digital", "Atualizações"] },
  { icon: Bot, area: "Sistema", itens: ["Estrutura preparada", "Integração em desenvolvimento"] },
];

const INFRA_COMPETENCIAS = [
  "Estratégia Digital", "Produção Audiovisual", "Fotografia", "Design Gráfico", "Copywriting",
  "Gestão de Redes Sociais", "Publicidade Digital", "Desenvolvimento Web", "Automação",
  "Organização de Processos", "Formação da Equipa", "Análise de Dados",
];

const INFRA_CHECKLIST = [
  "Planeamento Estratégico Anual", "Dashboard de Relatórios", "Planeamento Editorial", "WhatsApp Business",
  "Sistema de Validação de Conteúdos", "Casos de Sucesso no Website", "Estrutura de Captação de Leads",
  "Formação da Equipa para Contacto com Leads", "Plataforma TikTok", "Ativação da Função Reels Teste",
  "Estrutura para Automação", "Planeamento de Campanhas", "Marketing 360 Estruturado",
];

// os cinco pilares estratégicos, cada um com objetivo, implementações e impacto
const PILARES = [
  {
    icon: MessageCircle,
    titulo: "Comunicação com Pacientes: WhatsApp Business",
    objetivo: "Melhorar a rapidez, o profissionalismo e a consistência da comunicação com os pacientes em todos os pontos de contacto.",
    implementacoes: [
      "Foi implementada uma nova estrutura profissional de atendimento através da migração do WhatsApp básico da clínica para o WhatsApp Business, com perfil, biografia e horários configurados, preparando futuras integrações com o Marketing 360.",
      "Foram configuradas mensagens automáticas de boas-vindas e de resposta fora do horário de atendimento, garantindo que nenhum paciente fica sem resposta imediata.",
      "Foi realizada formação da receção para a gestão das mensagens automáticas e configuração de horários quando houver feriados ou dias fechados fora do padrão.",
    ],
    impacto: ["Comunicação mais rápida", "Melhor experiência do paciente", "Atendimento profissional em qualquer horário"],
  },
  {
    icon: Camera,
    titulo: "Produção",
    objetivo: "Estruturar uma produção de conteúdo consistente e planeada, capaz de sustentar o crescimento da presença digital da clínica.",
    implementacoes: [
      "Produzimos conteúdos, incluindo fotografia, vídeo, stories, destaques do Instagram e cartazes.",
      "Foi disponibilizado o planeamento editorial antecipado, com validação prévia dos conteúdos através da plataforma Rella.",
      "Foram desenvolvidas propostas gráficas para a fachada da unidade de Santo António dos Cavaleiros.",
      "Foram iniciados os testes da funcionalidade Reels Teste no Instagram.",
      "Foram desenvolvidas duas campanhas sazonais, Dia da Mãe e Dia da Criança, com materiais próprios para redes sociais e cartaz físico.",
    ],
    impacto: ["Conteúdo mais organizado", "Planeamento antecipado", "Maior consistência na comunicação"],
  },
  {
    icon: CircleDollarSign,
    titulo: "Captação de Novos Pacientes (com tráfego pago)",
    objetivo: "Preparar uma estrutura de anúncios capaz de gerar e qualificar novos leads de forma escalável.",
    implementacoes: [
      "Foi estruturada a base das campanhas de tráfego pago, incluindo a criação dos anúncios e dos respetivos criativos.",
      "Foi implementado um formulário de captação dentro das redes sociais, sem redirecionamento, recolhendo a clínica pretendida, a situação do paciente e os dados de contacto, sem sair da plataforma.",
      "Foi preparado e estruturado o processo de receção e contacto dos leads, com formação da equipa e roteiro base para ligações e marcação de consultas.",
    ],
    nota: "As campanhas de tráfego pago encontram-se temporariamente em pausa, enquanto se regulariza o acesso administrativo da conta Meta da clínica. Para garantir mais retorno e menores custos, a clínica precisa de ser titular do seu próprio portefólio empresarial dentro da Meta, processo que já está a ser tratado.",
    impacto: ["Estrutura preparada para geração de novos pacientes", "Processo de contacto padronizado"],
  },
  {
    icon: Globe,
    titulo: "Website e Comunicação Digital",
    objetivo: "Manter o website atualizado e alinhado com as necessidades da clínica, através de melhorias contínuas e manutenção regular.",
    implementacoes: [
      "Foi atualizado o cartão de visita digital com contactos e localização.",
      "Foram atualizadas páginas do website.",
      "Foram feitas atualizações para ligar o site ao novo sistema da Sorridente.",
    ],
    impacto: ["Website sempre atualizado", "Maior alinhamento com o novo sistema", "Manutenção contínua"],
  },
  {
    icon: Bot,
    titulo: "Automações",
    objetivo: "Preparar a base tecnológica que vai sustentar as próximas fases do Marketing 360.",
    implementacoes: [
      "Foi iniciada a preparação de um assistente virtual, para responder a perguntas frequentes e apoiar a marcação de consultas.",
    ],
    impacto: ["Base preparada para futuras automações", "Menos processos manuais no futuro"],
  },
];

const PROXIMA_FASE = {
  texto: "Estamos a aguardar os dados da Prodent para alimentar o novo sistema. Após a integração da base de dados do Prodent, encontram-se preparadas para ativação funcionalidades como:",
  itens: ["Agendamentos online", "Dashboard executivo", "Relatórios em tempo real", "IA para atendimento", "Automação de processos", "Integração completa do Marketing 360"],
  nota: "Este avanço depende também de fatores fora do nosso controlo total, como a receção dos dados da Prodent e a regularização da titularidade da conta Meta da clínica. Ambas as situações já estão a ser tratadas, e assim que estiverem resolvidas será possível avançar ainda mais rapidamente com as próximas fases do Marketing 360.",
};

const IMPACTO_AREAS = [
  { titulo: "Atendimento", itens: ["Comunicação mais rápida", "Melhor experiência do paciente", "Atendimento profissional"] },
  { titulo: "Marketing", itens: ["Conteúdo organizado", "Planeamento antecipado", "Maior consistência na comunicação"] },
  { titulo: "Publicidade", itens: ["Estrutura preparada para geração de novos pacientes", "Processo de contacto padronizado"] },
  { titulo: "Sistema", itens: ["Base preparada para futuras automações", "Menos processos manuais", "Preparação para novos recursos do Marketing 360"] },
];

// exemplo de estrutura, a substituir pelo plano de campanhas real
const OBJETIVOS_ANUAIS = [
  { icon: TrendingUp, titulo: "Notoriedade da marca", desc: "Aumentar o reconhecimento da Clínica Sorridente nas três unidades." },
  { icon: Award, titulo: "Autoridade clínica", desc: "Reforçar a confiança e a autoridade dos médicos junto do público." },
  { icon: CalendarCheck, titulo: "Consultas de avaliação", desc: "Aumentar o número de consultas de avaliação agendadas." },
  { icon: UserPlus, titulo: "Novos pacientes", desc: "Gerar um fluxo constante de novos pacientes através do digital." },
  { icon: Heart, titulo: "Fidelização", desc: "Fortalecer a relação com os pacientes atuais e incentivar o regresso." },
];

// o Marketing 360 arrancou no final de fevereiro de 2026: a linha do tempo cobre um ciclo anual completo,
// terminando em fevereiro do ano seguinte para mostrar o reinício do ciclo.
// cada mês funciona como um mini plano estratégico, não como um calendário editorial.
const TIMELINE_MESES = [
  {
    id: "fev26", mes: "Fevereiro", curto: "Fev", ano: "2026",
    temaPrincipal: "Autoestima · Primeiras Impressões · Sorrisos",
    mensagem: "Um sorriso influencia muito mais do que a aparência. Influencia a forma como nos sentimos e como comunicamos com os outros.",
    missao: "Vamos mostrar que investir no sorriso não é vaidade, é uma forma de recuperar confiança em situações do dia a dia. Vamos usar histórias reais de pacientes para tornar essa mudança tangível e próxima.",
    objetivosComunicacao: ["Humanizar a clínica", "Reduzir o medo do dentista", "Criar identificação emocional"],
    objetivosComercial: ["Gerar consultas para tratamentos estéticos", "Promover implantes", "Promover reabilitação oral"],
    temasDominar: [
      { grupo: "Autoestima", itens: ["Impacto do sorriso na confiança", "Situações do dia a dia", "Fotografias e memórias"] },
      { grupo: "Transformação", itens: ["Casos reais", "Antes e depois", "Testemunhos"] },
      { grupo: "Equipa", itens: ["Conheça a Dra. Maria João", "Bastidores dos tratamentos"] },
      { grupo: "Educação", itens: ["Mitos sobre estética dentária", "Perguntas frequentes sobre implantes"] },
    ],
    producao: ["Reels", "Carrosséis", "Antes e Depois", "Testemunhos", "Stories", "Bastidores da clínica"],
    campanhasOrganicas: [
      { nome: "Sorrisos que mudaram vidas", funcao: "Série de testemunhos que aproxima a marca de casos reais." },
      { nome: "Histórias de transformação", funcao: "Mostra o processo, não só o resultado." },
      { nome: "Conheça a Dra. Maria João", funcao: "Reforça a confiança através da equipa clínica." },
    ],
    campanhasPago: [
      { nome: "Implantes", funcao: "Capta quem já procura solução para dentes em falta." },
      { nome: "Reabilitação oral", funcao: "Atinge quem procura uma mudança mais profunda." },
      { nome: "Avaliação para melhorar o sorriso", funcao: "Porta de entrada para quem ainda está indeciso." },
    ],
    oportunidades: ["Início do ano, período de maior disponibilidade para decisões pessoais", "Regresso à rotina após as festas, momento de balanço"],
    resultadoEsperado: "Que mais pessoas associem o sorriso a bem-estar e sintam confiança para dar o primeiro passo em direção a uma avaliação.",
  },
  {
    id: "mar26", mes: "Março", curto: "Mar", ano: "2026",
    temaPrincipal: "Prevenção · Saúde Oral · Consciência",
    dataEspecial: "Dia Mundial da Saúde Oral, 20 de março",
    mensagem: "Os problemas dentários começam muito antes da dor aparecer.",
    missao: "Vamos aproveitar o Dia Mundial da Saúde Oral para mostrar que a prevenção evita problemas maiores. Vamos desmontar a ideia de que só se vai ao dentista quando dói.",
    objetivosComunicacao: ["Educar", "Criar autoridade", "Desmontar mitos"],
    objetivosComercial: ["Aumentar consultas de avaliação", "Promover check-up", "Promover higiene oral"],
    temasDominar: [
      { grupo: "Prevenção", itens: ["Consultas de rotina", "Sinais ignorados", "Adiar tratamentos"] },
      { grupo: "Educação", itens: ["Mitos sobre saúde oral", "O que a boca revela sobre a saúde geral"] },
    ],
    producao: ["Reels", "Carrosséis", "Antes e Depois", "Testemunhos", "Stories", "Bastidores da clínica"],
    campanhasOrganicas: [
      { nome: "Semana da Saúde Oral", funcao: "Sequência de conteúdos ao longo da semana da data mundial." },
      { nome: "Quiz e perguntas frequentes", funcao: "Formato interativo para aumentar o alcance orgânico." },
      { nome: "Vídeos educativos", funcao: "Reforça a autoridade clínica com linguagem simples." },
    ],
    campanhasPago: [
      { nome: "Consulta de avaliação", funcao: "Principal porta de entrada de novos pacientes." },
      { nome: "Check-up", funcao: "Capta quem já pensa em ir ao dentista mas ainda não agendou." },
      { nome: "Higiene oral", funcao: "Atinge quem procura manutenção, não tratamento." },
    ],
    oportunidades: ["Dia Mundial da Saúde Oral, 20 de março", "Regresso a uma rotina mais estável depois do início do ano"],
    resultadoEsperado: "Que mais pessoas percebam que adiar uma consulta tem custo, mesmo sem dor à vista, e marquem uma avaliação preventiva.",
  },
  {
    id: "abr26", mes: "Abril", curto: "Abr", ano: "2026",
    temaPrincipal: "Bem-estar · Renovação · Tecnologia",
    mensagem: "Cuidar do sorriso também é uma forma de cuidar de si.",
    missao: "Vamos associar a saúde oral à qualidade de vida em geral, mostrando como recuperar dentes perdidos muda o dia a dia, e aproveitar para apresentar a tecnologia da clínica.",
    objetivosComunicacao: ["Mostrar tecnologia", "Humanizar a clínica", "Motivar mudança"],
    objetivosComercial: ["Promover implantes", "Promover reabilitação oral"],
    temasDominar: [
      { grupo: "Qualidade de vida", itens: ["Rotina diária", "Recuperar dentes perdidos"] },
      { grupo: "Tecnologia", itens: ["Equipamentos da clínica", "Processo de tratamento"] },
      { grupo: "Institucional", itens: ["Conheça a clínica", "Antes e depois"] },
      { grupo: "Educação", itens: ["Como funciona um implante dentário", "Mitos sobre reabilitação oral"] },
    ],
    producao: ["Reels", "Carrosséis", "Antes e Depois", "Testemunhos", "Stories", "Bastidores da clínica"],
    campanhasOrganicas: [
      { nome: "Renove o seu sorriso", funcao: "Série sobre reabilitação, com foco no impacto no dia a dia." },
      { nome: "Conheça a nossa tecnologia", funcao: "Mostra os equipamentos por trás dos resultados." },
    ],
    campanhasPago: [
      { nome: "Implantes", funcao: "Mantém a captação constante de leads qualificados." },
      { nome: "Reabilitação oral", funcao: "Foca em casos mais complexos, tíquete mais alto." },
    ],
    oportunidades: ["Período pós Páscoa, retoma de rotinas", "Aproximação do verão, início do planeamento de tratamentos estéticos"],
    resultadoEsperado: "Que os pacientes associem a clínica a tecnologia de confiança e sintam-se seguros para avançar com tratamentos mais complexos.",
  },
  {
    id: "mai26", mes: "Maio", curto: "Mai", ano: "2026",
    temaPrincipal: "Cuidado · Emoção · Família",
    dataEspecial: "Dia da Mãe",
    mensagem: "Há pessoas que passam uma vida inteira a cuidar dos outros e acabam por se esquecer de cuidar delas próprias.",
    missao: "Vamos homenagear quem cuida dos outros, lembrando que também merece ser cuidada. É um mês para humanizar a marca através de histórias reais, não de promoções.",
    objetivosComunicacao: ["Humanizar a marca", "Criar identificação emocional"],
    objetivosComercial: ["Promover implantes", "Promover estética dentária"],
    temasDominar: [
      { grupo: "Cuidado", itens: ["Histórias de mães", "Rotina de quem cuida dos outros"] },
      { grupo: "Transformação", itens: ["Antes e depois", "Testemunhos"] },
      { grupo: "Equipa", itens: ["Bastidores da clínica"] },
      { grupo: "Educação", itens: ["Perguntas frequentes sobre reabilitação oral", "Sinais de que é hora de tratar"] },
    ],
    producao: ["Reels", "Carrosséis", "Antes e Depois", "Testemunhos", "Stories", "Bastidores da clínica"],
    campanhasOrganicas: [
      { nome: "O sorriso também é um gesto de amor", funcao: "Campanha emocional central do mês, sem tom comercial direto." },
    ],
    campanhasPago: [
      { nome: "Implantes", funcao: "Direcionado a quem já pondera o tratamento há algum tempo." },
      { nome: "Estética dentária", funcao: "Atinge quem procura um resultado visível a curto prazo." },
    ],
    oportunidades: ["Dia da Mãe, primeiro domingo de maio", "Aumento natural da procura por presentes ligados a bem-estar"],
    resultadoEsperado: "Que a marca seja percebida como próxima e humana, e que mais famílias considerem oferecer um tratamento como forma de cuidado.",
  },
  {
    id: "jun26", mes: "Junho", curto: "Jun", ano: "2026",
    temaPrincipal: "Família · Odontopediatria · Confiança",
    dataEspecial: "Dia da Criança",
    mensagem: "Os hábitos que aprendemos em crianças acompanham-nos durante toda a vida.",
    missao: "Vamos reforçar o posicionamento da clínica como uma clínica de família, mostrando como tornamos a primeira consulta das crianças numa experiência tranquila, não assustadora.",
    objetivosComunicacao: ["Reduzir o medo do dentista", "Humanizar a clínica"],
    objetivosComercial: ["Promover ortodontia", "Promover consulta infantil"],
    temasDominar: [
      { grupo: "Odontopediatria", itens: ["Primeira consulta", "Atendimento infantil"] },
      { grupo: "Hábitos", itens: ["Higiene oral desde cedo", "Ortodontia"] },
      { grupo: "Ambiente", itens: ["Ambiente da clínica"] },
      { grupo: "Educação", itens: ["Perguntas frequentes sobre a primeira consulta", "Como preparar a criança para o dentista"] },
    ],
    producao: ["Reels", "Carrosséis", "Antes e Depois", "Testemunhos", "Stories", "Bastidores da clínica"],
    campanhasOrganicas: [
      { nome: "Crescer com um sorriso saudável", funcao: "Série dedicada às famílias e à odontopediatria." },
    ],
    campanhasPago: [
      { nome: "Ortodontia", funcao: "Capta pais que já identificaram uma necessidade nos filhos." },
      { nome: "Consulta infantil", funcao: "Porta de entrada para novas famílias na clínica." },
    ],
    oportunidades: ["Dia da Criança, 1 de junho", "Aproximação das férias escolares, mais disponibilidade das famílias"],
    resultadoEsperado: "Que mais famílias vejam a clínica como o lugar certo para acompanhar o crescimento dos filhos, sem associar a consulta a medo.",
  },
  {
    id: "jul26", mes: "Julho", curto: "Jul", ano: "2026",
    temaPrincipal: "Verão · Prevenção · Implantologia",
    mensagem: "Há problemas que aparecem precisamente quando menos queremos que apareçam.",
    missao: "Durante este mês vamos aproveitar o período das férias para sensibilizar os pacientes para a importância da prevenção, mostrando que muitos problemas dentários surgem precisamente quando é mais difícil resolvê-los.",
    objetivosComunicacao: ["Educar", "Reduzir o medo do dentista"],
    objetivosComercial: ["Promover implantes", "Promover consulta de avaliação"],
    temasDominar: [
      { grupo: "Prevenção", itens: ["Consulta antes das férias", "Urgências", "Dor"] },
      { grupo: "Implantes", itens: ["Casos reais", "Antes e Depois", "Processo"] },
      { grupo: "Educação", itens: ["Perguntas frequentes", "Mitos", "Curiosidades"] },
    ],
    producao: ["Reels", "Carrosséis", "Antes e Depois", "Testemunhos", "Stories", "Bastidores da clínica"],
    campanhasOrganicas: [
      { nome: "Prepare o seu sorriso para o verão", funcao: "Conteúdo educativo com tom leve, adequado à época." },
      { nome: "Mitos sobre implantes", funcao: "Desmonta receios comuns que atrasam a decisão." },
      { nome: "Casos reais", funcao: "Mostra resultados concretos para gerar confiança." },
    ],
    campanhasPago: [
      { nome: "Implantes", funcao: "Capta quem adia a decisão há mais tempo." },
      { nome: "Consulta de Avaliação", funcao: "Baixo compromisso, alta conversão." },
      { nome: "Reabilitação Oral", funcao: "Direcionado a casos mais complexos." },
      { nome: "Remarketing", funcao: "Reimpacta quem já demonstrou interesse." },
    ],
    oportunidades: ["Início das férias", "Maior procura por avaliações antes de viajar", "Viagens", "Fotografias", "Vida social"],
    resultadoEsperado: "Que mais pessoas percebam a importância de uma avaliação preventiva antes das férias.",
  },
  {
    id: "ago26", mes: "Agosto", curto: "Ago", ano: "2026",
    temaPrincipal: "Qualidade de Vida · Reabilitação · Conforto",
    mensagem: "Há pequenos incómodos que aprendemos a suportar durante anos sem perceber o impacto que têm na nossa vida.",
    missao: "Vamos mostrar que viver com dentes em falta não é normal nem definitivo. O objetivo é atrair pacientes que já convivem com essa limitação há anos, mas nunca procuraram resolver.",
    objetivosComunicacao: ["Criar autoridade", "Reduzir o medo do dentista"],
    objetivosComercial: ["Promover implantes", "Promover reabilitação oral"],
    temasDominar: [
      { grupo: "Qualidade de vida", itens: ["Mastigação", "Limitações do dia a dia"] },
      { grupo: "Soluções", itens: ["Próteses", "Implantes"] },
      { grupo: "Confiança", itens: ["Testemunhos"] },
      { grupo: "Educação", itens: ["Mitos sobre próteses dentárias", "Como funciona a reabilitação com implantes"] },
    ],
    producao: ["Reels", "Carrosséis", "Antes e Depois", "Testemunhos", "Stories", "Bastidores da clínica"],
    campanhasOrganicas: [
      { nome: "Voltar a comer sem limitações", funcao: "Foca no benefício funcional, não estético." },
    ],
    campanhasPago: [
      { nome: "Implantes", funcao: "Direcionado a quem já procura solução definitiva." },
      { nome: "Reabilitação oral", funcao: "Capta casos mais avançados de perda dentária." },
    ],
    oportunidades: ["Continuação das férias, mais tempo disponível para tratamentos mais longos", "Regresso gradual à rotina no fim do mês"],
    resultadoEsperado: "Que pacientes com dentes em falta há muito tempo sintam que já não precisam de viver com essa limitação.",
  },
  {
    id: "set26", mes: "Setembro", curto: "Set", ano: "2026",
    temaPrincipal: "Regresso às Rotinas · Família · Hábitos",
    dataEspecial: "Regresso às aulas",
    mensagem: "O regresso à rotina é uma excelente oportunidade para criar hábitos que fazem a diferença.",
    missao: "Vamos aproveitar o início do ano letivo para trazer famílias inteiras à clínica, associando o regresso às rotinas a um novo compromisso com a saúde oral.",
    objetivosComunicacao: ["Humanizar a clínica", "Educar"],
    objetivosComercial: ["Promover ortodontia", "Aumentar consultas familiares"],
    temasDominar: [
      { grupo: "Regresso às rotinas", itens: ["Check-up", "Novos hábitos"] },
      { grupo: "Família", itens: ["Crianças", "Higiene oral"] },
      { grupo: "Ortodontia", itens: ["Sinais a observar"] },
      { grupo: "Educação", itens: ["Sinais de que a criança precisa de ortodontia", "Perguntas frequentes sobre check-up infantil"] },
    ],
    producao: ["Reels", "Carrosséis", "Antes e Depois", "Testemunhos", "Stories", "Bastidores da clínica"],
    campanhasOrganicas: [
      { nome: "Um novo ano começa com um sorriso saudável", funcao: "Liga o calendário escolar a um novo compromisso de saúde." },
    ],
    campanhasPago: [
      { nome: "Ortodontia", funcao: "Capta pais atentos a sinais nos filhos." },
      { nome: "Consulta familiar", funcao: "Incentiva a marcação de toda a família de uma vez." },
    ],
    oportunidades: ["Regresso às aulas", "Novas rotinas familiares", "Fim do período de férias"],
    resultadoEsperado: "Que mais famílias tragam as crianças à clínica como parte da rotina de regresso às aulas, não só quando há um problema.",
  },
  {
    id: "out26", mes: "Outubro", curto: "Out", ano: "2026",
    temaPrincipal: "Saúde Geral · Sinais · Prevenção",
    mensagem: "Nem todos os problemas dão sinais.",
    missao: "Este mês vamos ligar a saúde oral à saúde geral, mostrando que muitos problemas, como a inflamação das gengivas, não doem mas têm impacto no resto do corpo.",
    objetivosComunicacao: ["Educar", "Criar autoridade"],
    objetivosComercial: ["Aumentar consultas de avaliação", "Promover periodontologia"],
    temasDominar: [
      { grupo: "Saúde geral", itens: ["Gengivas", "Inflamação", "Sangramento"] },
      { grupo: "Prevenção", itens: ["Doenças periodontais"] },
      { grupo: "Tecnologia", itens: ["Diagnóstico"] },
      { grupo: "Educação", itens: ["Sinais de alerta de doença periodontal", "Mitos sobre sangramento das gengivas"] },
    ],
    producao: ["Reels", "Carrosséis", "Antes e Depois", "Testemunhos", "Stories", "Bastidores da clínica"],
    campanhasOrganicas: [
      { nome: "A saúde começa pela boca", funcao: "Liga saúde oral a saúde geral, tema pouco explorado." },
    ],
    campanhasPago: [
      { nome: "Consulta de avaliação", funcao: "Base do funil, sempre ativa." },
      { nome: "Periodontologia", funcao: "Capta quem já tem sintomas mas não sabe o que fazer." },
    ],
    oportunidades: ["Aproximação do outono, mudança de rotina", "Aumento sazonal de pesquisas sobre saúde"],
    resultadoEsperado: "Que os pacientes passem a associar a saúde da boca à sua saúde geral, e não apenas à estética do sorriso.",
  },
  {
    id: "nov26", mes: "Novembro", curto: "Nov", ano: "2026",
    temaPrincipal: "Transformação · Resultados · Confiança",
    mensagem: "Há decisões que mudam muito mais do que um sorriso.",
    missao: "Vamos mostrar resultados reais e concretos, dando espaço a quem já passou pelo processo para contar a sua própria história.",
    objetivosComunicacao: ["Criar autoridade", "Humanizar a clínica"],
    objetivosComercial: ["Promover implantes", "Promover reabilitação oral"],
    temasDominar: [
      { grupo: "Resultados", itens: ["Antes e depois", "Casos clínicos"] },
      { grupo: "Confiança", itens: ["Testemunhos", "Paciente modelo"] },
      { grupo: "Educação", itens: ["Como funciona o processo de reabilitação oral", "Perguntas frequentes sobre implantes"] },
    ],
    producao: ["Reels", "Carrosséis", "Antes e Depois", "Testemunhos", "Stories", "Bastidores da clínica"],
    campanhasOrganicas: [
      { nome: "Histórias reais", funcao: "Deixa o paciente contar a própria transformação." },
    ],
    campanhasPago: [
      { nome: "Paciente modelo", funcao: "Usa um caso de destaque para gerar identificação." },
      { nome: "Implantes", funcao: "Mantém a captação de leads antes do fim do ano." },
    ],
    oportunidades: ["Aproximação do fim do ano, momento de balanço pessoal", "Planeamento de tratamentos antes das festas"],
    resultadoEsperado: "Que quem ainda hesita veja em casos reais a prova de que a mudança é possível.",
  },
  {
    id: "dez26", mes: "Dezembro", curto: "Dez", ano: "2026",
    temaPrincipal: "Celebração · Família · Gratidão",
    mensagem: "Os melhores momentos do Natal têm quase sempre uma fotografia.",
    missao: "Vamos fechar o ano associando o sorriso aos momentos que ficam para memória, e aproveitar para agradecer aos pacientes que confiaram na clínica.",
    objetivosComunicacao: ["Humanizar a clínica", "Fidelizar"],
    objetivosComercial: ["Promover branqueamento", "Promover estética dentária"],
    temasDominar: [
      { grupo: "Celebração", itens: ["Fotografias em família", "Momentos especiais"] },
      { grupo: "Equipa", itens: ["Bastidores", "Agradecimento"] },
      { grupo: "Estética", itens: ["Antes e depois"] },
      { grupo: "Educação", itens: ["Cuidados com o sorriso durante as festas", "Mitos sobre branqueamento dentário"] },
    ],
    producao: ["Reels", "Carrosséis", "Antes e Depois", "Testemunhos", "Stories", "Bastidores da clínica"],
    campanhasOrganicas: [
      { nome: "Um sorriso também faz parte das memórias", funcao: "Liga estética a momentos emocionais do fim do ano." },
    ],
    campanhasPago: [
      { nome: "Branqueamento", funcao: "Procura sazonal mais alta nesta época." },
      { nome: "Estética dentária", funcao: "Capta quem quer resultado visível para as festas." },
    ],
    oportunidades: ["Época festiva, mais fotografias e convívio social", "Fim de ano, momento de balanço"],
    resultadoEsperado: "Que os pacientes sintam-se parte da história da clínica, e que mais pessoas procurem estética antes das festas.",
  },
  {
    id: "jan27", mes: "Janeiro", curto: "Jan", ano: "2027",
    temaPrincipal: "Recomeços · Autoestima · Decisão",
    mensagem: "Há objetivos que nunca escrevemos na lista, mas que podem mudar completamente a nossa vida.",
    missao: "Vamos aproveitar a energia de início de ano para incentivar tratamentos que os pacientes adiam há tempo, ligando o sorriso a um recomeço pessoal.",
    objetivosComunicacao: ["Motivar", "Criar identificação emocional"],
    objetivosComercial: ["Promover implantes", "Promover ortodontia", "Aumentar avaliações"],
    temasDominar: [
      { grupo: "Recomeços", itens: ["Resoluções", "Autoestima"] },
      { grupo: "Decisão", itens: ["Casos reais"] },
      { grupo: "Soluções", itens: ["Implantes", "Reabilitação"] },
      { grupo: "Educação", itens: ["Perguntas frequentes sobre ortodontia em adultos", "Mitos sobre implantes dentários"] },
    ],
    producao: ["Reels", "Carrosséis", "Antes e Depois", "Testemunhos", "Stories", "Bastidores da clínica"],
    campanhasOrganicas: [
      { nome: "Este pode ser o ano em que volta a sorrir com confiança", funcao: "Liga o calendário a uma decisão pessoal adiada." },
    ],
    campanhasPago: [
      { nome: "Implantes", funcao: "Aproveita a maior disponibilidade para decisões no início do ano." },
      { nome: "Avaliação", funcao: "Porta de entrada de baixo compromisso." },
      { nome: "Ortodontia", funcao: "Capta quem já pondera o tratamento há tempo." },
    ],
    oportunidades: ["Início de ano, período de maior propensão a decisões pessoais", "Resoluções de ano novo"],
    resultadoEsperado: "Que mais pacientes transformem uma intenção adiada há anos numa marcação real.",
  },
  {
    id: "fev27", mes: "Fevereiro", curto: "Fev", ano: "2027",
    cicloNovo: true,
    temaPrincipal: "Confiança · Recomeço do Ciclo · Sorriso",
    mensagem: "Quando voltamos a gostar do nosso sorriso, muitas outras coisas mudam também.",
    missao: "Fechamos o primeiro ciclo anual do Marketing 360 exatamente onde começámos, reforçando a autoestima como fio condutor da estratégia e preparando o início de um novo ciclo com a experiência acumulada.",
    objetivosComunicacao: ["Humanizar a marca", "Criar identificação emocional"],
    objetivosComercial: ["Promover implantes", "Promover estética dentária", "Promover avaliação personalizada"],
    temasDominar: [
      { grupo: "Transformação", itens: ["Histórias de transformação", "Antes e depois"] },
      { grupo: "Confiança", itens: ["Testemunhos", "Bastidores"] },
      { grupo: "Reabilitação", itens: ["Casos reais"] },
      { grupo: "Educação", itens: ["Perguntas frequentes sobre avaliação personalizada", "Como funciona o processo de transformação do sorriso"] },
    ],
    producao: ["Reels", "Carrosséis", "Antes e Depois", "Testemunhos", "Stories", "Bastidores da clínica"],
    campanhasOrganicas: [
      { nome: "Apaixone-se novamente pelo seu sorriso", funcao: "Fecha o ciclo anual com o mesmo tom emocional do arranque." },
    ],
    campanhasPago: [
      { nome: "Implantes", funcao: "Mantém a base de captação sempre ativa." },
      { nome: "Estética dentária", funcao: "Reforça o posicionamento estético da clínica." },
      { nome: "Avaliação personalizada", funcao: "Convite direto e pouco genérico à primeira consulta." },
    ],
    oportunidades: ["Fecho do primeiro ciclo anual do Marketing 360", "Início de um novo ciclo com histórico de resultados"],
    resultadoEsperado: "Que o primeiro ano do Marketing 360 seja percebido pela direção como o início de uma estratégia sólida e contínua, não uma ação pontual.",
  },
];
const CURRENT_MONTH_ID = "jul26";

const PRODUCAO_ICONS = {
  "Reels": Video, "Antes e Depois": Repeat, "Testemunhos": Quote, "Bastidores": Camera,
  "Bastidores da clínica": Camera, "Carrosséis": Layers, "Stories": CircleDot,
  "Vídeos institucionais": Video, "Vídeos educativos": Video,
};

const ORGANICO_OBJETIVOS = [
  { icon: BookOpen, texto: "Educar os pacientes" },
  { icon: Award, texto: "Criar autoridade" },
  { icon: MessageCircle, texto: "Gerar proximidade com a equipa médica" },
  { icon: Camera, texto: "Mostrar casos reais" },
  { icon: Heart, texto: "Aumentar confiança" },
  { icon: Rocket, texto: "Fortalecer a marca" },
];

const CONTEUDO_SERIES = [
  { nome: "Conteúdo educativo", cadencia: "Semanal", formato: "Vídeo / Carrossel" },
  { nome: "Antes e depois", cadencia: "Quinzenal", formato: "Imagem / Carrossel" },
  { nome: "Testemunhos", cadencia: "Mensal", formato: "Vídeo" },
  { nome: "Bastidores", cadencia: "Semanal", formato: "Stories" },
  { nome: "Institucional", cadencia: "Mensal", formato: "Vídeo / Imagem" },
];

const TRAFEGO_CAMADAS = [
  { icon: Repeat, nome: "Campanhas permanentes", desc: "Ativas o ano inteiro, garantem um fluxo constante de novos contactos, independentemente da época." },
  { icon: Gift, nome: "Campanhas sazonais", desc: "Reforço de investimento nos meses de campanha principal, como Dia da Mãe, Dia da Criança e Natal." },
  { icon: UserPlus, nome: "Campanhas de geração de leads", desc: "Focadas em captar dados de contacto de pacientes ainda a decidir." },
  { icon: Target, nome: "Campanhas de remarketing", desc: "Reimpactam quem já demonstrou interesse mas ainda não marcou consulta." },
  { icon: Award, nome: "Campanhas institucionais", desc: "Reforçam a marca e a autoridade da clínica, sem pedir uma ação imediata." },
];

const PRODUCAO_BENEFICIOS = [
  "Manter sempre conteúdos preparados com antecedência",
  "Garantir maior consistência nas publicações",
  "Reduzir deslocações e interrupções da rotina clínica",
  "Permitir que a direção valide os conteúdos com antecedência",
  "Criar uma biblioteca de conteúdos para utilização futura",
];

function PageHeader({ title, subtitle, badge }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
      <div>
        <h1 style={{ fontFamily: display, fontSize: 28, fontWeight: 800, margin: 0, color: ink, letterSpacing: "-0.02em" }}>
          {title}
        </h1>
        <p style={{ fontFamily: body, fontSize: 14, color: muted, margin: "6px 0 0", maxWidth: 560 }}>
          {subtitle}
        </p>
      </div>
      {badge && (
        <div style={{ textAlign: "right" }}>
          <div style={{ fontFamily: body, fontSize: 11.5, color: mutedSoft, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>
            Período
          </div>
          <div style={{ fontFamily: body, fontSize: 15, color: ink, fontWeight: 700, marginTop: 3 }}>
            {badge}
          </div>
        </div>
      )}
    </div>
  );
}

function NextSectionButton({ label, onClick }) {
  return (
    <button onClick={onClick} style={{
      fontFamily: body, fontSize: 13.5, fontWeight: 700, color: blue, background: blueSoft,
      border: "none", borderRadius: 999, padding: "13px 26px", cursor: "pointer",
      display: "inline-flex", alignItems: "center", gap: 8
    }}>
      {label} <ChevronRight size={16} />
    </button>
  );
}

function PrevSectionButton({ label, onClick }) {
  return (
    <button onClick={onClick} style={{
      fontFamily: body, fontSize: 13.5, fontWeight: 700, color: muted, background: "transparent",
      border: `1.5px solid ${border}`, borderRadius: 999, padding: "13px 26px", cursor: "pointer",
      display: "inline-flex", alignItems: "center", gap: 8
    }}>
      <ChevronLeft size={16} /> {label}
    </button>
  );
}

function PageNav({ children }) {
  return (
    <div className="no-print" style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", padding: "8px 0 56px" }}>
      {children}
    </div>
  );
}

function PillarCard({ icon: Icon, titulo, objetivo, implementacoes, nota, impacto }) {
  return (
    <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 20, padding: "30px 32px", marginBottom: 18 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: blue, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon size={19} color="#fff" strokeWidth={2} />
        </div>
        <span style={{ fontFamily: display, fontSize: 18, fontWeight: 800, color: ink, letterSpacing: "-0.01em" }}>{titulo}</span>
      </div>

      <div style={{ fontFamily: body, fontSize: 11, fontWeight: 700, color: blue, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>Objetivo</div>
      <p style={{ fontFamily: body, fontSize: 13.5, color: ink, lineHeight: 1.65, marginBottom: 22, maxWidth: 760 }}>{objetivo}</p>

      <div style={{ fontFamily: body, fontSize: 11, fontWeight: 700, color: blue, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>Implementações</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: nota ? 16 : 22 }}>
        {implementacoes.map((item) => (
          <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
            <div style={{ width: 18, height: 18, borderRadius: 6, background: greenSoft, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
              <Check size={11} color={green} strokeWidth={3} />
            </div>
            <span style={{ fontFamily: body, fontSize: 13, color: muted, lineHeight: 1.6, maxWidth: 720 }}>{item}</span>
          </div>
        ))}
      </div>

      {nota && (
        <div style={{
          background: "#FFFBEB", border: "1px solid #FDE9B0", borderLeft: "4px solid #D69E2E",
          borderRadius: 10, padding: "12px 16px", marginBottom: 22
        }}>
          <p style={{ fontFamily: body, fontSize: 12, color: "#7B5B10", margin: 0, lineHeight: 1.55 }}>{nota}</p>
        </div>
      )}

      <div style={{ borderTop: `1px solid ${border}`, paddingTop: 18 }}>
        <div style={{ fontFamily: body, fontSize: 11, fontWeight: 700, color: mutedSoft, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>Impacto</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {impacto.map((item) => (
            <span key={item} style={{
              display: "inline-flex", alignItems: "center", gap: 6, fontFamily: body, fontSize: 12, fontWeight: 600,
              color: green, background: greenSoft, padding: "6px 13px", borderRadius: 999
            }}>
              <Check size={11} strokeWidth={3} /> {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const PROGRESS_TONES = {
  green: { fill: "linear-gradient(90deg, #34D399, #16A34A)", text: "#15803D", bg: "#E7F8EE", glow: "rgba(22,163,74,0.35)" },
  amber: { fill: "linear-gradient(90deg, #FBBF24, #D69E2E)", text: "#8A5A00", bg: "#FEF6E7", glow: "rgba(214,158,46,0.35)" },
  blue: { fill: `linear-gradient(90deg, #93C5FD, ${blue})`, text: blue, bg: blueSoft, glow: "rgba(37,99,235,0.35)" },
};

function ProgressBarRow({ nome, pct, tone, statusLabel }) {
  const c = PROGRESS_TONES[tone];
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, gap: 10, flexWrap: "wrap" }}>
        <span style={{ fontFamily: body, fontSize: 13.5, fontWeight: 700, color: ink }}>{nome}</span>
        <span style={{ fontFamily: body, fontSize: 11, fontWeight: 700, color: c.text, background: c.bg, padding: "4px 12px", borderRadius: 999, whiteSpace: "nowrap" }}>
          {statusLabel}
        </span>
      </div>
      <div style={{ background: "#EEF1F5", borderRadius: 999, height: 10, overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: c.fill, borderRadius: 999, boxShadow: `0 0 10px ${c.glow}` }} />
      </div>
    </div>
  );
}

function ImpactCard({ titulo, itens }) {
  return (
    <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: "22px 24px" }}>
      <div style={{ fontFamily: display, fontSize: 14.5, fontWeight: 700, color: ink, marginBottom: 14 }}>{titulo}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {itens.map((item) => (
          <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 9 }}>
            <div style={{ width: 17, height: 17, borderRadius: 6, background: greenSoft, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
              <Check size={10} color={green} strokeWidth={3} />
            </div>
            <span style={{ fontFamily: body, fontSize: 12.5, color: muted, lineHeight: 1.55 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ObjetivoCard({ icon: Icon, titulo, desc }) {
  return (
    <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: "20px 22px" }}>
      <div style={{ width: 34, height: 34, borderRadius: 10, background: blueSoft, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
        <Icon size={16} color={blue} strokeWidth={2} />
      </div>
      <div style={{ fontFamily: display, fontSize: 14, fontWeight: 700, color: ink, marginBottom: 6 }}>{titulo}</div>
      <p style={{ fontFamily: body, fontSize: 12, color: muted, lineHeight: 1.5, margin: 0 }}>{desc}</p>
    </div>
  );
}

function TimelineMonthCard({ m, selected, onClick }) {
  const past = m.status === "passado";
  const current = m.status === "atual";
  const size = selected ? 68 : current ? 64 : 58;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, flexShrink: 0, width: 78 }}>
      <button className="month-card" onClick={onClick} style={{
        width: size, height: size, borderRadius: "50%", flexShrink: 0, cursor: "pointer",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        transition: "all 0.15s",
        background: selected ? blue : current ? blueSoft : "#fff",
        border: selected ? "none" : current ? `2px solid ${blue}` : `1.5px solid ${border}`,
        boxShadow: selected ? "0 8px 18px rgba(37,99,235,0.35)" : "none",
        opacity: past && !selected ? 0.4 : 1,
      }}>
        <span style={{ fontFamily: body, fontSize: 13, fontWeight: 800, color: selected ? "#fff" : current ? blue : ink, lineHeight: 1.15 }}>{m.curto}</span>
        <span style={{ fontFamily: body, fontSize: 9.5, fontWeight: 600, color: selected ? "rgba(255,255,255,0.8)" : mutedSoft, lineHeight: 1.15 }}>{m.ano}</span>
      </button>
      <div style={{ height: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {selected ? (
          <ChevronDown size={14} color={blue} strokeWidth={3} />
        ) : current ? (
          <span style={{ fontFamily: body, fontSize: 9, fontWeight: 800, letterSpacing: "0.04em", color: blue }}>AGORA</span>
        ) : null}
      </div>
    </div>
  );
}

function TrafegoCamadaCard({ icon: Icon, nome, desc }) {
  return (
    <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: "20px 22px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: 9, background: blueSoft, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon size={15} color={blue} strokeWidth={2} />
        </div>
        <span style={{ fontFamily: display, fontSize: 14, fontWeight: 700, color: ink }}>{nome}</span>
      </div>
      <p style={{ fontFamily: body, fontSize: 12, color: muted, lineHeight: 1.55, margin: 0 }}>{desc}</p>
    </div>
  );
}

function PlaceholderNote({ children }) {
  return (
    <div style={{
      background: blueSoft, border: `1px solid ${blueLine}`, borderRadius: 12,
      padding: "14px 18px", marginBottom: 32, display: "flex", gap: 10, alignItems: "flex-start"
    }}>
      <Info size={15} color={blue} style={{ marginTop: 2, flexShrink: 0 }} />
      <p style={{ fontFamily: body, fontSize: 12.5, color: "#1E3A8A", margin: 0, lineHeight: 1.6 }}>{children}</p>
    </div>
  );
}

export default function MarketingDashboard() {
  const [clinicUnit, setClinicUnit] = useState("Geral");
  const [clinicPeriod, setClinicPeriod] = useState("Jun/2026");
  const [activeTab, setActiveTab] = useState("boas-vindas");
  const [selectedMonth, setSelectedMonth] = useState(CURRENT_MONTH_ID);

  const clinica = getClinicStats(clinicUnit, clinicPeriod);
  const taxaAtendimentoGeral = clinica.agendadas > 0 ? (clinica.realizadas / clinica.agendadas) * 100 : 0;
  const oportunidadeRecuperacao = clinica.naoRegressaramCancel + clinica.naoRegressaramFalta;

  const currentIdx = TIMELINE_MESES.findIndex(m => m.id === CURRENT_MONTH_ID);
  const mesesComStatus = TIMELINE_MESES.map((m, i) => ({
    ...m,
    status: i < currentIdx ? "passado" : i === currentIdx ? "atual" : "futuro",
  }));
  const mesAtivo = mesesComStatus.find(m => m.id === selectedMonth) || mesesComStatus[currentIdx];

  const goTo = (id) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ background: bg, minHeight: "100%", fontFamily: body, color: ink }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap');
        button:focus-visible { outline: 2px solid ${blue}; outline-offset: 2px; }
        .month-card:hover { transform: scale(1.08); }
        @keyframes floatGlow { 0%,100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-18px) scale(1.05); } }
        .glow-anim { animation: floatGlow 9s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .glow-anim { animation: none; } }
        @media print {
          .no-print { display: none !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          body { background: #fff !important; }
        }
      `}</style>

      {/* menu fixo */}
      <div className="no-print" style={{ position: "sticky", top: 0, zIndex: 40, background: "rgba(250,251,252,0.92)", backdropFilter: "blur(10px)", borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
          <span style={{ fontFamily: display, fontWeight: 800, fontSize: 15, color: ink, letterSpacing: "-0.01em" }}>Clínica Sorridente</span>
          <div style={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}>
            {NAV.map(item => {
              const active = activeTab === item.id;
              return (
                <button key={item.id} onClick={() => goTo(item.id)} style={{
                  fontFamily: body, fontSize: 12.5, fontWeight: 600, padding: "8px 14px", borderRadius: 9,
                  border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
                  background: active ? blue : "transparent", color: active ? "#fff" : muted
                }}>
                  <item.icon size={14} /> {item.label}
                </button>
              );
            })}
            <button onClick={() => window.print()} title="Exportar esta página" style={{
              fontFamily: body, fontSize: 12.5, fontWeight: 600, padding: "8px 14px", borderRadius: 9,
              border: `1px solid ${border}`, cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
              background: "#fff", color: muted, marginLeft: 6
            }}>
              <Download size={14} /> Exportar
            </button>
          </div>
        </div>
      </div>

      {/* ===================== TELA INICIAL · BOAS-VINDAS ===================== */}
      {activeTab === "boas-vindas" && (
        <div style={{
          padding: "110px 32px 100px", background: `linear-gradient(180deg, ${blueSoft} 0%, ${bg} 60%)`,
          position: "relative", overflow: "hidden"
        }}>
          <div style={{
            position: "absolute", top: -80, right: "10%", width: 320, height: 320, borderRadius: "50%",
            background: "rgba(37,99,235,0.14)", filter: "blur(60px)", pointerEvents: "none"
          }} />
          <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", position: "relative" }}>
            <div style={{ fontFamily: body, fontSize: 12, fontWeight: 700, color: blue, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 18 }}>
              Your Vision Agency
            </div>
            <h1 style={{ fontFamily: display, fontSize: 38, fontWeight: 800, color: ink, letterSpacing: "-0.02em", lineHeight: 1.2, margin: 0 }}>
              Relatório digital da Clínica Sorridente
            </h1>
            <p style={{ fontFamily: body, fontSize: 15, color: muted, lineHeight: 1.75, marginTop: 20, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
              Este é o relatório digital desenvolvido pela Your Vision Agency para acompanhar a estratégia de
              Marketing 360 da Clínica Sorridente. Basta seguir os menus acima para navegar entre as páginas,
              a qualquer momento.
            </p>

            <button onClick={() => goTo("redes-sociais")} style={{
              fontFamily: body, fontSize: 14.5, fontWeight: 700, color: "#fff", background: blue,
              border: "none", borderRadius: 999, padding: "15px 34px", cursor: "pointer", marginTop: 36,
              display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "0 10px 24px rgba(37,99,235,0.3)"
            }}>
              Ver relatório <ChevronRight size={17} />
            </button>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, marginTop: 48 }}>
              {NAV.map(item => (
                <span key={item.id} style={{
                  display: "inline-flex", alignItems: "center", gap: 7, fontFamily: body, fontSize: 12, fontWeight: 600,
                  color: muted, background: "#fff", border: `1px solid ${border}`, padding: "8px 15px", borderRadius: 999
                }}>
                  <item.icon size={13} color={blue} /> {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ===================== ABA 1 · RELATÓRIO DIGITAL ===================== */}
      {activeTab === "redes-sociais" && (
        <div style={{ padding: "32px 32px 0" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>

        {/* header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
          <div>
            <h1 style={{ fontFamily: display, fontSize: 30, fontWeight: 800, margin: 0, color: ink, letterSpacing: "-0.02em" }}>
              Resultados Clínica Sorridente
            </h1>
            <p style={{ fontFamily: body, fontSize: 14.5, color: muted, margin: "6px 0 0" }}>
              Acompanhamento da evolução da estratégia digital desde o início do Marketing 360.
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: body, fontSize: 11.5, color: mutedSoft, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>
              Período analisado
            </div>
            <div style={{ fontFamily: body, fontSize: 15, color: ink, fontWeight: 700, marginTop: 3 }}>
              Fevereiro → Junho 2026
            </div>
          </div>
        </div>

        {/* intro / overview */}
        <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: "24px 28px", marginBottom: 44 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <Info size={16} color={blue} />
            <span style={{ fontFamily: body, fontSize: 12.5, fontWeight: 700, color: blue, textTransform: "uppercase", letterSpacing: "0.04em" }}>Sobre este relatório</span>
          </div>
          <p style={{ fontFamily: body, fontSize: 14, lineHeight: 1.75, color: ink, margin: 0 }}>
            Este relatório reúne os principais indicadores de desempenho da Clínica Sorridente, permitindo acompanhar
            a evolução da estratégia digital e o seu impacto na atividade das clínicas. Na primeira parte analisamos
            a evolução da presença digital desde o início do Marketing 360, comparando os principais indicadores com
            o baseline do projeto. Na segunda parte relacionamos essa evolução com os resultados das clínicas,
            permitindo acompanhar o impacto na captação de pacientes, marcações e atividade clínica.
          </p>
        </div>

        {/* ===== PARTE 1 · REDES SOCIAIS ===== */}
        <PartDivider
          number="01"
          title="Redes sociais"
          description="Evolução dos principais indicadores digitais desde o início do Marketing 360, comparando o desempenho atual com o baseline definido no arranque do projeto."
        />

        <SectionTitle eyebrow="Impacto total">Resultado acumulado (Fevereiro → Junho)</SectionTitle>
        <Caption>Soma de todos os indicadores desde o baseline, o ponto de partida do Marketing 360, até junho de 2026.</Caption>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 60 }}>
          <BaselineCard icon={Eye} label="Visualizações" value={totals.visualizacoes} growthPct={growth.visualizacoes} />
          <BaselineCard icon={Heart} label="Interações" value={totals.interacoes} growthPct={growth.interacoes} />
          <BaselineCard icon={Megaphone} label="Pessoas alcançadas" value={totals.alcance} growthPct={growth.alcance} />
          <BaselineCard icon={UserRound} label="Visitas ao perfil" value={totals.visitasPerfil} growthPct={growth.visitasPerfil} />
          <BaselineCard icon={Users} label="Contas envolvidas" value={totals.contasEnvolvidas} growthPct={null} />
          <BaselineCard icon={FileText} label="Publicações" value={totals.publicacoes} growthPct={null} />
        </div>

        <SectionTitle eyebrow="Situação atual">Resultado de Junho</SectionTitle>
        <Caption>Indicadores referentes a junho de 2026, comparados com o baseline (janeiro), que representa o ponto de partida do projeto Marketing 360.</Caption>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginBottom: 60 }}>
          <MonthCard icon={Eye} label="Visualizações" value={current.visualizacoes} change={pctChange(current.visualizacoes, baseline.visualizacoes)} />
          <MonthCard icon={Megaphone} label="Alcance" value={current.alcance} change={pctChange(current.alcance, baseline.alcance)} />
          <MonthCard icon={Heart} label="Interações" value={current.interacoes} change={pctChange(current.interacoes, baseline.interacoes)} />
          <MonthCard icon={UserRound} label="Visitas ao perfil" value={current.visitasPerfil} change={pctChange(current.visitasPerfil, baseline.visitasPerfil)} />
        </div>

        <SectionTitle eyebrow="Trajetória">Metas superadas</SectionTitle>
        <Caption wide>Comparação entre a meta acordada no início do projeto e o crescimento acumulado desde o baseline, registado até junho de 2026. A marca "↑ meta" mostra onde ficava o objetivo dentro da barra.</Caption>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 18, marginBottom: 28 }}>
          {METAS.map(m => <MetaCard key={m.key} {...m} />)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 18, marginBottom: 60 }}>
          <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 18, padding: "24px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 9, background: blueSoft, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <BONUS_METRIC.icon size={15} color={blue} strokeWidth={2} />
              </div>
              <span style={{ fontFamily: body, fontSize: 13, fontWeight: 600, color: ink }}>{BONUS_METRIC.label}</span>
            </div>
            <div style={{ fontFamily: body, fontSize: 34, fontWeight: 800, color: blue, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>
              +{BONUS_METRIC.achieved}%
            </div>
            <div style={{ fontFamily: body, fontSize: 12, color: mutedSoft, marginTop: 4 }}>sem meta definida no acordo inicial</div>
          </div>
        </div>

        <SectionTitle eyebrow="Trajetória">Estado das metas contratuais</SectionTitle>
        <Caption>Visão rápida do estado de cada meta definida em contrato, para além do crescimento acumulado acima.</Caption>
        <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 18, padding: "26px 26px 6px", marginBottom: 24 }}>
          {METAS_CONTRATUAIS.map(m => <ProgressBarRow key={m.nome} {...m} />)}
        </div>
        <div style={{
          display: "flex", alignItems: "flex-start", gap: 10, background: "#FFFBEB", border: "1px solid #FDE9B0",
          borderLeft: "4px solid #D69E2E", borderRadius: 12, padding: "14px 18px", marginBottom: 56
        }}>
          <AlertTriangle size={16} color="#B7791F" style={{ flexShrink: 0, marginTop: 2 }} />
          <p style={{ fontFamily: body, fontSize: 12.5, color: "#7B5B10", margin: 0, lineHeight: 1.6 }}>
            As campanhas de tráfego pago encontram-se temporariamente em pausa devido à regularização da titularidade
            da conta Meta da Clínica Sorridente. Este processo está a ser acompanhado com a Cláudia em conjunto com a
            nossa equipa e, assim que estiver concluído, as campanhas serão reativadas e otimizadas de forma contínua.
          </p>
        </div>

        <SectionTitle eyebrow="Detalhe">Comparativo mensal</SectionTitle>
        <Caption>Todos os indicadores, mês a mês, desde fevereiro até junho de 2026, com o total acumulado em destaque.</Caption>
        <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, overflow: "hidden", marginBottom: 60 }}>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: body, fontSize: 13.5 }}>
              <thead>
                <tr style={{ background: "#F7F9FC" }}>
                  {["Mês", "Visualizações", "Alcance", "Interações", "Visitas Perfil", "Contas Envolvidas", "Publicações"].map((h, i) => (
                    <th key={h} style={{
                      textAlign: i === 0 ? "left" : "right", padding: "13px 18px", color: muted,
                      fontWeight: 600, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.03em",
                      borderBottom: `1px solid ${border}`
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {monthly.map((m) => (
                  <tr key={m.month} style={{ borderBottom: `1px solid ${border}` }}>
                    <td style={{ padding: "13px 18px", fontWeight: 600, color: ink }}>{m.month}</td>
                    <td style={{ padding: "13px 18px", textAlign: "right", fontVariantNumeric: "tabular-nums", color: ink }}>{fmt(m.visualizacoes)}</td>
                    <td style={{ padding: "13px 18px", textAlign: "right", fontVariantNumeric: "tabular-nums", color: ink }}>{fmt(m.alcance)}</td>
                    <td style={{ padding: "13px 18px", textAlign: "right", fontVariantNumeric: "tabular-nums", color: ink }}>{fmt(m.interacoes)}</td>
                    <td style={{ padding: "13px 18px", textAlign: "right", fontVariantNumeric: "tabular-nums", color: ink }}>{fmt(m.visitasPerfil)}</td>
                    <td style={{ padding: "13px 18px", textAlign: "right", fontVariantNumeric: "tabular-nums", color: ink }}>{fmt(m.contasEnvolvidas)}</td>
                    <td style={{ padding: "13px 18px", textAlign: "right", fontVariantNumeric: "tabular-nums", color: ink }}>{fmt(m.publicacoes)}</td>
                  </tr>
                ))}
                <tr style={{ background: blueSoft }}>
                  <td style={{ padding: "14px 18px", fontWeight: 800, color: blue, fontSize: 12.5, textTransform: "uppercase", letterSpacing: "0.03em" }}>Total acumulado</td>
                  <td style={{ padding: "14px 18px", textAlign: "right", fontWeight: 800, color: blue, fontVariantNumeric: "tabular-nums" }}>{fmt(totals.visualizacoes)}</td>
                  <td style={{ padding: "14px 18px", textAlign: "right", fontWeight: 800, color: blue, fontVariantNumeric: "tabular-nums" }}>{fmt(totals.alcance)}</td>
                  <td style={{ padding: "14px 18px", textAlign: "right", fontWeight: 800, color: blue, fontVariantNumeric: "tabular-nums" }}>{fmt(totals.interacoes)}</td>
                  <td style={{ padding: "14px 18px", textAlign: "right", fontWeight: 800, color: blue, fontVariantNumeric: "tabular-nums" }}>{fmt(totals.visitasPerfil)}</td>
                  <td style={{ padding: "14px 18px", textAlign: "right", fontWeight: 800, color: blue, fontVariantNumeric: "tabular-nums" }}>{fmt(totals.contasEnvolvidas)}</td>
                  <td style={{ padding: "14px 18px", textAlign: "right", fontWeight: 800, color: blue, fontVariantNumeric: "tabular-nums" }}>{fmt(totals.publicacoes)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={{
          display: "flex", alignItems: "flex-start", gap: 10, background: "#FFFBEB", border: "1px solid #FDE9B0",
          borderLeft: "4px solid #D69E2E", borderRadius: 12, padding: "14px 18px", marginBottom: 60
        }}>
          <AlertTriangle size={16} color="#B7791F" style={{ flexShrink: 0, marginTop: 2 }} />
          <p style={{ fontFamily: body, fontSize: 12.5, color: "#7B5B10", margin: 0, lineHeight: 1.6 }}>
            <strong>Nota sobre a queda de junho.</strong> Em junho, com o Mundial de futebol a dominar as redes sociais,
            os números orgânicos de empresas e criadores de conteúdo em geral caíram de forma generalizada. O algoritmo
            passa a priorizar conteúdos sobre os assuntos do momento, e páginas com outros temas acabam por ter menos
            alcance nesse período. É um efeito sazonal e transversal ao setor, não específico da Clínica Sorridente. A
            isto soma-se uma redução pontual na frequência de publicações nas últimas semanas, um fator que está dentro
            do nosso controlo e que já estamos a corrigir. Os números tendem a normalizar e a voltar a crescer já em julho.
          </p>
        </div>

        {/* performance das publicações */}
        <SectionTitle eyebrow="Performance" large>Performance das publicações</SectionTitle>
        <Caption wide>Um olhar mais de perto sobre o que tem funcionado nas últimas semanas: que formatos, que conteúdos e a que horas.</Caption>

        <div style={{
          background: `linear-gradient(160deg, #FDF0F7 0%, #F5F0FF 55%, #FBFBFF 100%)`,
          border: `1px solid ${roseLine}`, borderRadius: 26, padding: "34px 34px 8px", marginBottom: 56, position: "relative", overflow: "hidden"
        }}>
          <div style={{
            position: "absolute", top: -70, right: -60, width: 260, height: 260, borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(219,39,119,0.16), rgba(124,58,237,0.16))", filter: "blur(50px)", pointerEvents: "none"
          }} />

          <div style={{ position: "relative" }}>
            {/* recap do período */}
            <div style={{ fontFamily: body, fontSize: 11, fontWeight: 700, color: rose, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 14 }}>
              Últimas semanas
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 14, marginBottom: 34 }}>
              <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: 16, padding: "20px 20px" }}>
                <div style={{ width: 32, height: 32, borderRadius: 9, background: roseSoft, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <Eye size={15} color={rose} strokeWidth={2} />
                </div>
                <div style={{ fontFamily: body, fontSize: 30, fontWeight: 800, color: ink, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>6,7K</div>
                <div style={{ fontFamily: body, fontSize: 11.5, color: muted, marginTop: 5 }}>Visualizações</div>
              </div>
              <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: 16, padding: "20px 20px" }}>
                <div style={{ width: 32, height: 32, borderRadius: 9, background: roseSoft, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <UserPlus size={15} color={rose} strokeWidth={2} />
                </div>
                <div style={{ fontFamily: body, fontSize: 30, fontWeight: 800, color: ink, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>49%</div>
                <div style={{ fontFamily: body, fontSize: 11.5, color: muted, marginTop: 5 }}>Visualizações de não-seguidores (+3% vs. mês anterior)</div>
              </div>
              <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: 16, padding: "20px 20px" }}>
                <div style={{ width: 32, height: 32, borderRadius: 9, background: roseSoft, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <Heart size={15} color={rose} strokeWidth={2} />
                </div>
                <div style={{ fontFamily: body, fontSize: 30, fontWeight: 800, color: ink, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>+11</div>
                <div style={{ fontFamily: body, fontSize: 11.5, color: muted, marginTop: 5 }}>Novos seguidores (total ≈ 2,1K)</div>
              </div>
            </div>

            {/* reels vs posts */}
            <div style={{ fontFamily: body, fontSize: 11, fontWeight: 700, color: rose, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 14 }}>
              Reels vs. Posts
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14, marginBottom: 20 }}>
              <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: 16, padding: "20px 22px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                  <Video size={15} color={rose} />
                  <span style={{ fontFamily: display, fontSize: 14, fontWeight: 700, color: ink }}>Reels</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {[["Likes", 362], ["Comentários", 23], ["Guardados", 5], ["Partilhas", 35]].map(([l, v]) => (
                    <div key={l}>
                      <div style={{ fontFamily: body, fontSize: 20, fontWeight: 800, color: ink, fontVariantNumeric: "tabular-nums" }}>{v}</div>
                      <div style={{ fontFamily: body, fontSize: 11, color: muted }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: 16, padding: "20px 22px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                  <Layers size={15} color={muted} />
                  <span style={{ fontFamily: display, fontSize: 14, fontWeight: 700, color: ink }}>Posts</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {[["Likes", 355], ["Comentários", 11], ["Guardados", 3], ["Partilhas", 2]].map(([l, v]) => (
                    <div key={l}>
                      <div style={{ fontFamily: body, fontSize: 20, fontWeight: 800, color: ink, fontVariantNumeric: "tabular-nums" }}>{v}</div>
                      <div style={{ fontFamily: body, fontSize: 11, color: muted }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 34 }}>
              <ArrowUpRight size={13} color={rose} />
              <span style={{ fontFamily: body, fontSize: 12, color: "#9D174D" }}>Os reels geraram <strong>17 vezes mais partilhas</strong> do que os posts, o principal motor de alcance fora da base de seguidores.</span>
            </div>

            {/* top publicações */}
            <div style={{ fontFamily: body, fontSize: 11, fontWeight: 700, color: rose, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 14 }}>
              Publicações em destaque
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14, marginBottom: 34 }}>
              {TOP_PUBLICACOES.map(p => (
                <div key={p.titulo} style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: 16, padding: "20px 22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ fontFamily: body, fontSize: 10.5, fontWeight: 700, color: rose, background: roseSoft, padding: "3px 10px", borderRadius: 999 }}>{p.formato}</span>
                    <span style={{ fontFamily: body, fontSize: 11, color: mutedSoft }}>{p.data}</span>
                  </div>
                  <p style={{ fontFamily: display, fontSize: 13.5, fontWeight: 700, color: ink, lineHeight: 1.4, margin: "0 0 14px" }}>{p.titulo}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 10 }}>
                    <div>
                      <div style={{ fontFamily: body, fontSize: 17, fontWeight: 800, color: ink }}>{p.views}</div>
                      <div style={{ fontFamily: body, fontSize: 10.5, color: muted }}>Visualizações</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: body, fontSize: 17, fontWeight: 800, color: ink }}>{p.likes}</div>
                      <div style={{ fontFamily: body, fontSize: 10.5, color: muted }}>Likes</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: body, fontSize: 17, fontWeight: 800, color: ink }}>{p.naoSeguidores}%</div>
                      <div style={{ fontFamily: body, fontSize: 10.5, color: muted }}>Não-seguidores</div>
                    </div>
                  </div>
                  <div style={{ fontFamily: body, fontSize: 11, color: mutedSoft }}>Tempo de visualização: {p.watchTime}</div>
                </div>
              ))}
            </div>

            {/* melhor horário */}
            <div style={{ fontFamily: body, fontSize: 11, fontWeight: 700, color: rose, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 14 }}>
              Melhor horário para publicar
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 34 }}>
              {["Segundas, 21h - 00h", "Terças, 21h - 00h", "Quintas, 21h - 00h"].map(h => (
                <span key={h} style={{
                  display: "inline-flex", alignItems: "center", gap: 6, fontFamily: body, fontSize: 12, fontWeight: 600,
                  color: ink, background: "#fff", border: `1px solid ${border}`, padding: "7px 14px", borderRadius: 999
                }}>
                  <CalendarCheck size={12} color={rose} /> {h}
                </span>
              ))}
            </div>

            {/* o que vamos ajustar */}
            <div style={{
              background: `linear-gradient(135deg, ${ink} 0%, #17243B 100%)`, borderRadius: 18,
              padding: "26px 28px", marginBottom: 26, position: "relative", overflow: "hidden"
            }}>
              <div style={{
                position: "absolute", top: -50, right: -30, width: 180, height: 180, borderRadius: "50%",
                background: "rgba(219,39,119,0.3)", filter: "blur(40px)"
              }} />
              <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 14, position: "relative" }}>
                <Target size={15} color="#F5A8CE" />
                <span style={{ fontFamily: body, fontSize: 11, fontWeight: 700, color: "#F5A8CE", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  O que vamos ajustar
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, position: "relative" }}>
                {AJUSTES_PUBLICACOES.map(a => (
                  <div key={a} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <ArrowRight size={14} color="#F5A8CE" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontFamily: body, fontSize: 13, color: "#E4EAF5", lineHeight: 1.6 }}>{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===== PARTE 2 · ANÁLISE CRUZADA ===== */}
        <PartDivider
          number="02"
          title="Análise cruzada"
          description="Relacionamos a evolução digital com os resultados reais das clínicas, para perceber o impacto na atividade e identificar oportunidades de melhoria, sobretudo na recuperação de pacientes que cancelaram."
        />

        <SectionTitle eyebrow="Análise cruzada" large>Resultados na clínica</SectionTitle>
        <Caption wide>Números da atividade das clínicas, para além das redes sociais: marcações, consultas realizadas e, sobretudo, a oportunidade de recuperar pacientes que cancelaram ou faltaram. Escolha a unidade e o mês para explorar.</Caption>

        <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: "18px 22px", marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <SlidersHorizontal size={15} color={blue} />
            <span style={{ fontFamily: body, fontSize: 12.5, fontWeight: 700, color: blue, textTransform: "uppercase", letterSpacing: "0.04em" }}>
              Escolha o que quer ver
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            <div>
              <div style={{ fontFamily: body, fontSize: 12, fontWeight: 600, color: muted, marginBottom: 8 }}>Unidade</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {CLINIC_UNITS.map(u => (
                  <button key={u} onClick={() => setClinicUnit(u)} style={{
                    fontFamily: body, fontSize: 13, fontWeight: 600, padding: "9px 16px", borderRadius: 10,
                    border: `1.5px solid ${clinicUnit === u ? blue : border}`,
                    background: clinicUnit === u ? blue : surface,
                    color: clinicUnit === u ? "#fff" : ink, cursor: "pointer",
                    boxShadow: clinicUnit === u ? "0 2px 6px rgba(37,99,235,0.25)" : "none"
                  }}>
                    {u}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: body, fontSize: 12, fontWeight: 600, color: muted, marginBottom: 8 }}>Mês</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {CLINIC_PERIODS.map(p => (
                  <button key={p} onClick={() => setClinicPeriod(p)} style={{
                    fontFamily: body, fontSize: 13, fontWeight: 600, padding: "9px 16px", borderRadius: 10,
                    border: `1.5px solid ${clinicPeriod === p ? blue : border}`,
                    background: clinicPeriod === p ? blue : surface,
                    color: clinicPeriod === p ? "#fff" : ink, cursor: "pointer",
                    boxShadow: clinicPeriod === p ? "0 2px 6px rgba(37,99,235,0.25)" : "none"
                  }}>
                    {p === "Mai/2026" ? "Maio 2026" : "Junho 2026"}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 18, padding: "28px 24px", marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10, rowGap: 22 }}>
            <FunnelStage icon={CalendarCheck} label="Consultas agendadas" value={clinica.agendadas} tone="blue" />
            <ArrowRight size={18} color={mutedSoft} />
            <FunnelStage icon={Smile} label="Consultas realizadas" value={clinica.realizadas} tone="green" />
            <ArrowRight size={18} color={mutedSoft} />
            <FunnelStage icon={XCircle} label="Canceladas" value={clinica.canceladas} tone="red" />
            <ArrowRight size={18} color={mutedSoft} />
            <FunnelStage icon={AlertTriangle} label="Faltas" value={clinica.faltas} tone="amber" />
            <ArrowRight size={18} color={mutedSoft} />
            <FunnelStage icon={RotateCcw} label="Remarcadas no mês" value={clinica.remarcadas} tone="blue" />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 20 }}>
          <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: "22px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <TrendingUp size={16} color={blue} />
              <span style={{ fontFamily: body, fontSize: 12.5, fontWeight: 700, color: blue, textTransform: "uppercase", letterSpacing: "0.03em" }}>Taxa de atendimento</span>
            </div>
            <div style={{ fontFamily: body, fontSize: 34, fontWeight: 800, color: ink, fontVariantNumeric: "tabular-nums" }}>{taxaAtendimentoGeral.toFixed(1)}%</div>
            <p style={{ fontFamily: body, fontSize: 12.5, color: muted, marginTop: 8, lineHeight: 1.5 }}>
              Das {fmt(clinica.agendadas)} marcações geradas no período, {fmt(clinica.realizadas)} chegaram mesmo a consulta.
            </p>
          </div>

          <div style={{
            background: "linear-gradient(135deg, #FFFBEB 0%, #FFFFFF 60%)", border: "1px solid #FDE9B0",
            borderRadius: 16, padding: "22px 24px"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <Target size={16} color={"#B7791F"} />
              <span style={{ fontFamily: body, fontSize: 12.5, fontWeight: 700, color: "#B7791F", textTransform: "uppercase", letterSpacing: "0.03em" }}>Prioridade: recuperação</span>
            </div>
            <div style={{ fontFamily: body, fontSize: 34, fontWeight: 800, color: ink, fontVariantNumeric: "tabular-nums" }}>{fmt(oportunidadeRecuperacao)}</div>
            <p style={{ fontFamily: body, fontSize: 12.5, color: "#6B5019", marginTop: 8, lineHeight: 1.5 }}>
              pacientes que cancelaram ou faltaram e ainda não regressaram. Maior oportunidade de ganho imediato.
            </p>
          </div>
        </div>

        <div style={{
          background: "#FFFBEB", border: "1px solid #FDE9B0", borderLeft: "4px solid #D69E2E",
          borderRadius: 12, padding: "16px 20px", marginBottom: 60
        }}>
          <p style={{ fontFamily: body, fontSize: 13, color: "#7B5B10", margin: 0, lineHeight: 1.6 }}>
            <strong>Nota sazonal.</strong> Junho é, historicamente, um mês de menor procura nas três unidades, um padrão
            repetido nos relatórios de anos anteriores. Ainda assim, a clínica manteve uma taxa de atendimento estável
            e a presença digital continuou em crescimento consistente, o que reforça que a base construída pelo
            marketing continua a sustentar a operação mesmo nos meses mais fracos.
          </p>
        </div>

        {/* resumo */}
        <SectionTitle eyebrow="Síntese">Resumo</SectionTitle>
        <div style={{
          background: `linear-gradient(180deg, ${blueSoft} 0%, ${surface} 55%)`, border: `1px solid ${border}`,
          borderRadius: 18, padding: "28px 30px", marginBottom: 60
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <TrendingUp size={16} color={blue} />
            <span style={{ fontFamily: body, fontSize: 12.5, fontWeight: 700, color: blue, textTransform: "uppercase", letterSpacing: "0.04em" }}>Análise</span>
          </div>
          <p style={{ fontFamily: body, fontSize: 15, lineHeight: 1.75, color: ink, margin: 0 }}>
            A estratégia digital apresentou uma evolução muito positiva ao longo dos últimos cinco meses e superou,
            com folga, todas as metas acordadas no início do projeto. O alcance acumulado cresceu mais de <strong>1.000%</strong> face
            ao baseline, enquanto o engajamento aumentou mais de <strong>1.300%</strong>, sinal de uma comunidade bastante mais ativa.
            As visualizações ultrapassaram as <strong>40 mil</strong> ao longo do período analisado, e as visitas ao perfil
            cresceram mais de <strong>600%</strong>, o que reflete um maior interesse na clínica e nos seus serviços.
            No conjunto, os resultados confirmam que a estratégia implementada está a gerar um crescimento consistente,
            e que esse crescimento se está a traduzir em marcações reais nas três unidades.
          </p>
        </div>

          </div>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <PageNav>
              <NextSectionButton label="Ver ações Marketing 360 de Maio e Junho" onClick={() => goTo("acoes-mes")} />
            </PageNav>
          </div>
        </div>
      )}

      {/* ===================== ABA 2 · IMPLEMENTAÇÃO DO MARKETING 360 ===================== */}
      {activeTab === "acoes-mes" && (
        <div style={{ padding: "32px 32px 0" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <PageHeader
              title="Ações Marketing 360 em Maio e Junho"
              subtitle="Durante os últimos dois meses foram implementadas novas ferramentas, processos, campanhas e estruturas que irão suportar o crescimento digital da Clínica Sorridente e preparar as próximas fases do Marketing 360."
              badge="MAI - JUN 2026"
            />

            <div style={{
              display: "flex", alignItems: "flex-start", gap: 10, background: "#FFFBEB", border: "1px solid #FDE9B0",
              borderLeft: "4px solid #D69E2E", borderRadius: 12, padding: "14px 18px", marginBottom: 40
            }}>
              <AlertTriangle size={16} color="#B7791F" style={{ flexShrink: 0, marginTop: 2 }} />
              <p style={{ fontFamily: body, fontSize: 12.5, color: "#7B5B10", margin: 0, lineHeight: 1.6 }}>
                <strong>As ações detalhadas nesta página referem-se aos últimos dois meses (Maio e Junho de 2026).</strong> O
                comparativo mais abaixo, "O que existe hoje que não existia há cinco meses", olha para todo o percurso desde
                o início do Marketing 360, em fevereiro.
              </p>
            </div>

            {/* infraestrutura de marketing implementada */}
            <SectionTitle eyebrow="Infraestrutura" large>Infraestrutura de Marketing Implementada</SectionTitle>
            <Caption wide>
              Ao longo dos últimos cinco meses foi desenvolvida uma estrutura completa de comunicação, captação de
              pacientes, automação e marketing digital, criando uma base sólida para a evolução contínua da Clínica Sorridente.
            </Caption>

            <div style={{
              background: `linear-gradient(160deg, #EEF3FF 0%, #F6F9FF 55%, #FBFDFF 100%)`,
              border: `1px solid ${blueLine}`, borderRadius: 26, padding: "34px 34px 8px", marginBottom: 56, position: "relative", overflow: "hidden"
            }}>
              <div style={{
                position: "absolute", top: -70, right: -60, width: 260, height: 260, borderRadius: "50%",
                background: "rgba(37,99,235,0.14)", filter: "blur(50px)", pointerEvents: "none"
              }} />

              {/* bloco 1: o projeto em números */}
              <div style={{ position: "relative" }}>
                <div style={{ fontFamily: body, fontSize: 11, fontWeight: 700, color: blue, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 14 }}>
                  O projeto em números
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14, marginBottom: 34 }}>
                  {INFRA_KPIS.map(k => (
                    <div key={k.label} style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: 16, padding: "20px 20px" }}>
                      <div style={{ width: 32, height: 32, borderRadius: 9, background: blueSoft, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                        <k.icon size={15} color={blue} strokeWidth={2} />
                      </div>
                      <div style={{ fontFamily: body, fontSize: 30, fontWeight: 800, color: ink, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>{k.value}</div>
                      <div style={{ fontFamily: body, fontSize: 11.5, color: muted, marginTop: 5, lineHeight: 1.4, fontWeight: 600 }}>{k.label}</div>
                      <div style={{ fontFamily: body, fontSize: 10.5, color: mutedSoft, marginTop: 6, lineHeight: 1.45, paddingTop: 6, borderTop: `1px solid ${border}` }}>{k.detalhe}</div>
                    </div>
                  ))}
                </div>

                {/* bloco 2: o que foi construído */}
                <div style={{ fontFamily: body, fontSize: 11, fontWeight: 700, color: blue, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 14 }}>
                  O que foi construído
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 14, marginBottom: 34 }}>
                  {INFRA_CONSTRUIDO.map(b => (
                    <div key={b.area} style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: 16, padding: "18px 20px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 12 }}>
                        <div style={{ width: 28, height: 28, borderRadius: 8, background: blueSoft, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <b.icon size={13} color={blue} strokeWidth={2} />
                        </div>
                        <span style={{ fontFamily: display, fontSize: 13.5, fontWeight: 700, color: ink }}>{b.area}</span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        {b.itens.map(item => (
                          <span key={item} style={{ fontFamily: body, fontSize: 11.5, color: muted, lineHeight: 1.5 }}>{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* bloco 3: competências envolvidas */}
                <div style={{ fontFamily: body, fontSize: 11, fontWeight: 700, color: blue, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 14 }}>
                  Competências envolvidas
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 34 }}>
                  {INFRA_COMPETENCIAS.map(c => (
                    <span key={c} style={{
                      fontFamily: body, fontSize: 12, fontWeight: 600, color: ink, background: "#fff",
                      border: `1px solid ${border}`, padding: "7px 14px", borderRadius: 999
                    }}>
                      {c}
                    </span>
                  ))}
                </div>

                {/* bloco 4: o que existe hoje que não existia há 5 meses */}
                <div style={{ fontFamily: body, fontSize: 11, fontWeight: 700, color: blue, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>
                  O que existe hoje que não existia há cinco meses
                </div>
                <p style={{ fontFamily: body, fontSize: 12, color: muted, margin: "0 0 16px" }}>
                  Cada uma destas linhas representa algo que a clínica não tinha antes do Marketing 360.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 10, marginBottom: 34 }}>
                  {INFRA_CHECKLIST.map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, background: "#fff", border: `1px solid ${border}`, borderRadius: 12, padding: "13px 16px" }}>
                      <div style={{ width: 22, height: 22, borderRadius: "50%", background: greenSoft, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Check size={12} color={green} strokeWidth={3.5} />
                      </div>
                      <span style={{ fontFamily: display, fontSize: 13.5, fontWeight: 700, color: ink }}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* bloco final: valor entregue */}
                <div style={{
                  background: `linear-gradient(135deg, ${ink} 0%, #17243B 100%)`, borderRadius: 18,
                  padding: "26px 28px", marginBottom: 26, position: "relative", overflow: "hidden"
                }}>
                  <div style={{
                    position: "absolute", top: -50, right: -30, width: 180, height: 180, borderRadius: "50%",
                    background: "rgba(37,99,235,0.3)", filter: "blur(40px)"
                  }} />
                  <div style={{ fontFamily: body, fontSize: 11, fontWeight: 700, color: blueLine, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10, position: "relative" }}>
                    Valor entregue
                  </div>
                  <p style={{ fontFamily: body, fontSize: 14, color: "#E4EAF5", lineHeight: 1.75, margin: 0, maxWidth: 780, position: "relative" }}>
                    Ao longo destes cinco meses não foram apenas produzidos conteúdos para as redes sociais. Foi desenvolvida
                    uma infraestrutura de Marketing 360 composta por processos, campanhas, ferramentas, ativos digitais,
                    formação da equipa e estratégias de comunicação, criando uma base sólida para o crescimento sustentável
                    da Clínica Sorridente nos próximos meses.
                  </p>
                </div>
              </div>
            </div>

            {/* pilares estratégicos */}
            <SectionTitle eyebrow="Pilares estratégicos">Onde o trabalho foi implementado</SectionTitle>
            <Caption wide>Cada pilar responde a três perguntas: porque foi feito, o que foi implementado e qual o impacto direto para a clínica.</Caption>
            <div style={{ marginBottom: 40 }}>
              {PILARES.map(p => <PillarCard key={p.titulo} {...p} />)}
            </div>

            {/* impacto das implementações */}
            <SectionTitle eyebrow="Resultado">Impacto das implementações</SectionTitle>
            <Caption>O benefício direto, por área, de tudo o que foi implementado neste período.</Caption>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 56 }}>
              {IMPACTO_AREAS.map(a => <ImpactCard key={a.titulo} {...a} />)}
            </div>

            {/* evolução do projeto */}
            <SectionTitle eyebrow="Evolução">Evolução do projeto</SectionTitle>
            <Caption>O estado de consolidação de cada área do Marketing 360, num relance.</Caption>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", columnGap: 40,
              background: surface, border: `1px solid ${border}`, borderRadius: 18, padding: "28px 28px 8px", marginBottom: 56
            }}>
              {EVOLUCAO_PROJETO.map(e => <ProgressBarRow key={e.nome} {...e} />)}
            </div>

            {/* próxima fase */}
            <div style={{
              background: `linear-gradient(135deg, ${blueSoft} 0%, ${surface} 60%)`, border: `1px solid ${border}`,
              borderRadius: 18, padding: "28px 28px", marginBottom: 60
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: blue, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Rocket size={17} color="#fff" strokeWidth={2} />
                </div>
                <span style={{ fontFamily: display, fontSize: 17, fontWeight: 800, color: ink }}>Próxima fase</span>
              </div>
              <p style={{ fontFamily: body, fontSize: 13.5, color: ink, lineHeight: 1.7, marginBottom: 18, maxWidth: 680 }}>
                {PROXIMA_FASE.texto}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 9, marginBottom: 20 }}>
                {PROXIMA_FASE.itens.map(item => (
                  <span key={item} style={{
                    fontFamily: body, fontSize: 12.5, fontWeight: 600, color: blue, background: "#fff",
                    border: `1px solid ${blueLine}`, padding: "7px 15px", borderRadius: 999
                  }}>
                    {item}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start", background: "rgba(255,255,255,0.6)", borderRadius: 12, padding: "14px 16px" }}>
                <Info size={15} color={blue} style={{ marginTop: 2, flexShrink: 0 }} />
                <p style={{ fontFamily: body, fontSize: 12, color: muted, margin: 0, lineHeight: 1.6, maxWidth: 640 }}>{PROXIMA_FASE.nota}</p>
              </div>
            </div>
          </div>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <PageNav>
              <PrevSectionButton label="Visualizar Relatório Redes Sociais" onClick={() => goTo("redes-sociais")} />
              <NextSectionButton label="Ver plano de campanhas anual" onClick={() => goTo("plano-anual")} />
            </PageNav>
          </div>
        </div>
      )}

      {/* ===================== ABA 3 · PLANO ESTRATÉGICO ANUAL ===================== */}
      {activeTab === "plano-anual" && (
        <div style={{ padding: "32px 32px 0" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <PageHeader
              title="Plano Estratégico Anual"
              subtitle="A estratégia de comunicação e crescimento da Clínica Sorridente para os próximos 12 meses, ligando objetivos comerciais, campanhas, conteúdo e publicidade."
              badge="MARKETING 360"
            />

            {/* objetivos anuais */}
            <SectionTitle eyebrow="Fundação">Objetivos anuais</SectionTitle>
            <Caption wide>A base que orienta cada campanha, cada conteúdo e cada anúncio ao longo do ano.</Caption>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, marginBottom: 56 }}>
              {OBJETIVOS_ANUAIS.map(o => <ObjetivoCard key={o.titulo} {...o} />)}
            </div>

            {/* linha do tempo interativa */}
            <SectionTitle eyebrow="Linha do tempo" large>O ano, mês a mês</SectionTitle>
            <Caption wide>
              O Marketing 360 iniciou em meados de fevereiro de 2026. Desde então, foi desenvolvido um planeamento
              estratégico anual para garantir uma comunicação consistente, campanhas bem estruturadas e objetivos
              definidos para cada período do ano.
            </Caption>

            <div style={{ display: "flex", alignItems: "flex-start", gap: 10, background: blueSoft, border: `1px solid ${blueLine}`, borderRadius: 12, padding: "14px 18px", marginBottom: 20 }}>
              <MousePointerClick size={16} color={blue} style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ fontFamily: body, fontSize: 12.5, fontWeight: 700, color: "#1E3A8A", marginBottom: 3 }}>Como utilizar este planeamento</div>
                <span style={{ fontFamily: body, fontSize: 12.5, color: "#1E3A8A", lineHeight: 1.55 }}>
                  Cada mês representa um plano estratégico independente. Selecione qualquer mês na linha temporal
                  para visualizar os objetivos, campanhas, conteúdos e ações previstas para esse período.
                </span>
              </div>
            </div>

            <div style={{
              display: "flex", alignItems: "flex-start", gap: 10, background: "#FFFBEB", border: "1px solid #FDE9B0",
              borderLeft: "4px solid #D69E2E", borderRadius: 12, padding: "14px 18px", marginBottom: 24
            }}>
              <AlertTriangle size={16} color="#B7791F" style={{ flexShrink: 0, marginTop: 2 }} />
              <p style={{ fontFamily: body, fontSize: 12.5, color: "#7B5B10", margin: 0, lineHeight: 1.6 }}>
                <strong>Este é apenas um resumo.</strong> Todo o planeamento e os conteúdos ficam disponíveis, com mais
                detalhe, na plataforma Rella, que usamos para validação dos conteúdos. Para ver planeamentos, datas e
                conteúdos já finalizados, é lá que devem consultar, e é também por lá que podem validar, ou solicitar
                correções e melhorias.
              </p>
            </div>

            {/* bloco único: timeline + cartão de detalhe, visualmente ligados */}
            <div style={{
              background: `linear-gradient(160deg, #EEF3FF 0%, #F6F9FF 55%, #FBFDFF 100%)`,
              border: `1px solid ${blueLine}`, borderRadius: 26, marginBottom: 56, overflow: "hidden", position: "relative"
            }}>
              <div style={{
                position: "absolute", top: -70, right: -60, width: 260, height: 260, borderRadius: "50%",
                background: "rgba(37,99,235,0.14)", filter: "blur(50px)", pointerEvents: "none"
              }} />

              <div style={{ padding: "20px 8px 0", position: "relative" }}>
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute", top: 33, left: 40, right: 40, height: 2, background: blueLine, zIndex: 0 }} />
                  <div style={{ display: "flex", gap: 14, overflowX: "auto", position: "relative", zIndex: 1, padding: "0 20px 6px" }}>
                    {mesesComStatus.map(m => (
                      <TimelineMonthCard key={m.id} m={m} selected={m.id === selectedMonth} onClick={() => setSelectedMonth(m.id)} />
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 18, flexWrap: "wrap", padding: "4px 20px 18px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: body, fontSize: 11, color: muted }}>
                    <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#fff", border: `1.5px solid ${blueLine}`, opacity: 0.5 }} /> Já aconteceu
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: body, fontSize: 11, color: muted }}>
                    <span style={{ width: 12, height: 12, borderRadius: "50%", background: blueSoft, border: `2px solid ${blue}` }} /> A decorrer agora
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: body, fontSize: 11, color: muted }}>
                    <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#fff", border: `1.5px solid ${blueLine}` }} /> Por vir
                  </span>
                </div>
              </div>

              {/* cartão de detalhe: mini plano estratégico do mês, flutua sobre o fundo gradiente */}
              <div style={{
                background: "#fff", borderRadius: 22, margin: "0 14px 14px", padding: "30px 34px 34px",
                boxShadow: "0 10px 30px rgba(15,35,90,0.08)", position: "relative"
              }}>

                {/* 1. cabeçalho */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
                  <span style={{
                    fontFamily: body, fontSize: 11.5, fontWeight: 700, padding: "4px 12px", borderRadius: 999,
                    color: mesAtivo.status === "atual" ? blue : mesAtivo.status === "passado" ? muted : green,
                    background: mesAtivo.status === "atual" ? blueSoft : mesAtivo.status === "passado" ? "#F1F4F8" : greenSoft,
                  }}>
                    {mesAtivo.status === "passado" ? "Já aconteceu" : mesAtivo.status === "atual" ? "A decorrer agora" : "Por vir"}
                  </span>
                  {mesAtivo.dataEspecial && (
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: body, fontSize: 11.5, fontWeight: 600, color: muted, background: "#F1F4F8", padding: "4px 12px", borderRadius: 999 }}>
                      <CalendarCheck size={12} /> {mesAtivo.dataEspecial}
                    </span>
                  )}
                  {mesAtivo.cicloNovo && (
                    <span style={{ fontFamily: body, fontSize: 11.5, fontWeight: 700, color: violet, background: violetSoft, padding: "4px 12px", borderRadius: 999 }}>
                      Início de um novo ciclo anual
                    </span>
                  )}
                </div>

                <div style={{ fontFamily: display, fontSize: 28, fontWeight: 800, color: ink, letterSpacing: "-0.015em", marginBottom: 8 }}>
                  {mesAtivo.mes} de {mesAtivo.ano}
                </div>
                <div style={{
                  fontFamily: display, fontSize: 15, fontWeight: 800, color: blue, textTransform: "uppercase",
                  letterSpacing: "0.04em", marginBottom: 28, lineHeight: 1.4
                }}>
                  {mesAtivo.temaPrincipal}
                </div>

                {/* 2. mensagem estratégica */}
                <div style={{ display: "flex", gap: 14, background: bg, borderRadius: 16, padding: "20px 22px", marginBottom: 26 }}>
                  <Quote size={22} color={blueLine} style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontFamily: body, fontSize: 10.5, fontWeight: 700, color: mutedSoft, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>Mensagem estratégica</div>
                    <p style={{ fontFamily: display, fontSize: 15.5, fontWeight: 600, color: ink, lineHeight: 1.55, margin: 0, fontStyle: "italic" }}>
                      {mesAtivo.mensagem}
                    </p>
                  </div>
                </div>

                {/* 3. missão do mês */}
                <div style={{ marginBottom: 26 }}>
                  <div style={{ fontFamily: body, fontSize: 11, fontWeight: 700, color: mutedSoft, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Missão do mês</div>
                  <p style={{ fontFamily: body, fontSize: 13.5, color: ink, lineHeight: 1.65, margin: 0, maxWidth: 760 }}>{mesAtivo.missao}</p>
                </div>

                {/* 4. objetivos */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14, marginBottom: 26 }}>
                  <div>
                    <div style={{ fontFamily: body, fontSize: 11, fontWeight: 700, color: mutedSoft, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 9 }}>Objetivos de comunicação</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                      {mesAtivo.objetivosComunicacao.map(item => (
                        <span key={item} style={{ fontFamily: body, fontSize: 12, fontWeight: 600, color: blue, background: blueSoft, padding: "5px 12px", borderRadius: 999 }}>{item}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontFamily: body, fontSize: 11, fontWeight: 700, color: mutedSoft, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 9 }}>Objetivos comerciais</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                      {mesAtivo.objetivosComercial.map(item => (
                        <span key={item} style={{ fontFamily: body, fontSize: 12, fontWeight: 600, color: green, background: greenSoft, padding: "5px 12px", borderRadius: 999 }}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 5. temas que vamos dominar */}
                <div style={{ marginBottom: 26 }}>
                  <div style={{ fontFamily: body, fontSize: 11, fontWeight: 700, color: mutedSoft, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>Temas que vamos abordar</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 10 }}>
                    {mesAtivo.temasDominar.map(t => (
                      <div key={t.grupo} style={{ background: bg, border: `1px solid ${border}`, borderRadius: 12, padding: "13px 15px" }}>
                        <div style={{ fontFamily: display, fontSize: 12.5, fontWeight: 700, color: ink, marginBottom: 7 }}>{t.grupo}</div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                          {t.itens.map(item => (
                            <span key={item} style={{ fontFamily: body, fontSize: 11.5, color: muted, lineHeight: 1.5 }}>{item}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 6. produção de conteúdo */}
                <div style={{ marginBottom: 26 }}>
                  <div style={{ fontFamily: body, fontSize: 11, fontWeight: 700, color: mutedSoft, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>Produção de conteúdo</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {mesAtivo.producao.map(formato => {
                      const FormatoIcon = PRODUCAO_ICONS[formato] || Camera;
                      return (
                        <span key={formato} style={{
                          display: "inline-flex", alignItems: "center", gap: 6, fontFamily: body, fontSize: 12, fontWeight: 600,
                          color: ink, background: "#fff", border: `1px solid ${border}`, padding: "6px 13px", borderRadius: 999
                        }}>
                          <FormatoIcon size={13} color={blue} /> {formato}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* 7. campanhas */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14, marginBottom: 26 }}>
                  <div style={{ background: greenSoft, borderRadius: 14, padding: "18px 20px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 12 }}>
                      <Megaphone size={13} color={green} />
                      <span style={{ fontFamily: body, fontSize: 11, fontWeight: 700, color: green, textTransform: "uppercase", letterSpacing: "0.04em" }}>Campanhas orgânicas</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                      {mesAtivo.campanhasOrganicas.map(c => (
                        <div key={c.nome}>
                          <div style={{ fontFamily: body, fontSize: 12.5, fontWeight: 700, color: "#1E5B3A" }}>{c.nome}</div>
                          <div style={{ fontFamily: body, fontSize: 11.5, color: "#3F6B54", lineHeight: 1.45 }}>{c.funcao}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ background: blueSoft, borderRadius: 14, padding: "18px 20px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 12 }}>
                      <CircleDollarSign size={13} color={blue} />
                      <span style={{ fontFamily: body, fontSize: 11, fontWeight: 700, color: blue, textTransform: "uppercase", letterSpacing: "0.04em" }}>Tráfego pago</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                      {mesAtivo.campanhasPago.map(c => (
                        <div key={c.nome}>
                          <div style={{ fontFamily: body, fontSize: 12.5, fontWeight: 700, color: "#1E3A8A" }}>{c.nome}</div>
                          <div style={{ fontFamily: body, fontSize: 11.5, color: "#3D5A96", lineHeight: 1.45 }}>{c.funcao}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 8. oportunidades do mês */}
                <div style={{ marginBottom: 26 }}>
                  <div style={{ fontFamily: body, fontSize: 11, fontWeight: 700, color: mutedSoft, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>Oportunidades do mês</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {mesAtivo.oportunidades.map(item => (
                      <span key={item} style={{
                        display: "inline-flex", alignItems: "center", gap: 6, fontFamily: body, fontSize: 12, color: muted,
                        background: "#fff", border: `1px solid ${border}`, padding: "6px 13px", borderRadius: 999
                      }}>
                        <CalendarCheck size={12} color={mutedSoft} /> {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 9. resultado esperado */}
                <div style={{
                  background: `linear-gradient(135deg, ${blueSoft} 0%, ${surface} 65%)`, border: `1px solid ${border}`,
                  borderRadius: 14, padding: "18px 20px", display: "flex", gap: 12, alignItems: "flex-start"
                }}>
                  <Target size={17} color={blue} style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontFamily: body, fontSize: 11, fontWeight: 700, color: blue, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>Resultado esperado</div>
                    <p style={{ fontFamily: body, fontSize: 13, color: ink, lineHeight: 1.6, margin: 0 }}>{mesAtivo.resultadoEsperado}</p>
                  </div>
                </div>

              </div>
            </div>

            <div style={{
              display: "flex", alignItems: "flex-start", gap: 10, background: "#FFFBEB", border: "1px solid #FDE9B0",
              borderLeft: "4px solid #D69E2E", borderRadius: 12, padding: "14px 18px", marginBottom: 56
            }}>
              <AlertTriangle size={16} color="#B7791F" style={{ flexShrink: 0, marginTop: 2 }} />
              <p style={{ fontFamily: body, fontSize: 12.5, color: "#7B5B10", margin: 0, lineHeight: 1.6 }}>
                <strong>Querem sugerir ou adicionar um tema?</strong> Este planeamento é ajustável e flexível. Antes de
                sugerir um novo tema, vale a pena confirmar se ele já não está previsto no Rella. Depois, é só pedir por
                email, através do Rella ou pelo WhatsApp. Só pedimos aviso prévio, para conseguirmos produzir e validar o
                conteúdo com a devida antecedência.
              </p>
            </div>

            {/* conteúdo orgânico */}
            <SectionTitle eyebrow="Conteúdo orgânico">Construir relacionamento</SectionTitle>
            <Caption wide>O orgânico é a ferramenta de construção de relacionamento com o paciente. Antes de vender, educamos, criamos autoridade e aproximamos a equipa médica de quem nos segue.</Caption>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
              {ORGANICO_OBJETIVOS.map(o => (
                <span key={o.texto} style={{
                  display: "inline-flex", alignItems: "center", gap: 7, fontFamily: body, fontSize: 12.5, fontWeight: 600,
                  color: green, background: greenSoft, padding: "7px 14px", borderRadius: 999
                }}>
                  <o.icon size={13} /> {o.texto}
                </span>
              ))}
            </div>
            <div style={{ fontFamily: body, fontSize: 11, fontWeight: 700, color: mutedSoft, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>
              Séries que sustentam esta estratégia
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 14, marginBottom: 56 }}>
              {CONTEUDO_SERIES.map(s => (
                <div key={s.nome} style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: "20px 20px" }}>
                  <div style={{ fontFamily: display, fontSize: 14, fontWeight: 700, color: ink, marginBottom: 10 }}>{s.nome}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={{ fontFamily: body, fontSize: 11.5, color: blue, fontWeight: 700 }}>{s.cadencia}</span>
                    <span style={{ fontFamily: body, fontSize: 11.5, color: muted }}>{s.formato}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* tráfego pago */}
            <SectionTitle eyebrow="Tráfego pago">Converter interesse em consultas</SectionTitle>
            <Caption wide>O pago entra depois do orgânico, para transformar interesse em consultas marcadas. Não substitui a comunicação orgânica, converte a confiança que ela constrói.</Caption>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginBottom: 20 }}>
              {TRAFEGO_CAMADAS.map(c => <TrafegoCamadaCard key={c.nome} {...c} />)}
            </div>
            <div style={{
              display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap", background: surface, border: `1px solid ${border}`,
              borderRadius: 16, padding: "20px 24px", marginBottom: 56
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 34, height: 34, borderRadius: 10, background: greenSoft, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <MessageCircle size={16} color={green} />
                </span>
                <div>
                  <div style={{ fontFamily: body, fontSize: 12.5, fontWeight: 700, color: ink }}>Orgânico</div>
                  <div style={{ fontFamily: body, fontSize: 11.5, color: muted }}>Gera confiança</div>
                </div>
              </div>
              <ArrowRight size={18} color={mutedSoft} />
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 34, height: 34, borderRadius: 10, background: blueSoft, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <CircleDollarSign size={16} color={blue} />
                </span>
                <div>
                  <div style={{ fontFamily: body, fontSize: 12.5, fontWeight: 700, color: ink }}>Pago</div>
                  <div style={{ fontFamily: body, fontSize: 11.5, color: muted }}>Converte essa confiança em novos pacientes</div>
                </div>
              </div>
            </div>

            {/* produção trimestral */}
            <SectionTitle eyebrow="Produção">Gravações em bloco, não semana a semana</SectionTitle>
            <Caption wide>
              As gravações concentram-se em dias específicos, produzindo uma grande quantidade de conteúdos de uma só vez.
              O objetivo não é gravar para a semana seguinte, é criar um fluxo contínuo de conteúdos preparados para os
              próximos 2 a 3 meses.
            </Caption>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10, marginBottom: 28 }}>
              {PRODUCAO_BENEFICIOS.map(b => (
                <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 8, background: surface, border: `1px solid ${border}`, borderRadius: 12, padding: "12px 14px" }}>
                  <div style={{ width: 16, height: 16, borderRadius: 5, background: greenSoft, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <Check size={9} color={green} strokeWidth={3} />
                  </div>
                  <span style={{ fontFamily: body, fontSize: 12, color: ink, lineHeight: 1.5 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <PageNav>
              <PrevSectionButton label="Voltar às ações Marketing 360" onClick={() => goTo("acoes-mes")} />
              <NextSectionButton label="Ver próximos passos" onClick={() => goTo("proximos-passos")} />
            </PageNav>
          </div>
        </div>
      )}

      {/* ===================== ABA 4 · PRÓXIMOS PASSOS ===================== */}
      {activeTab === "proximos-passos" && (
        <div style={{ paddingTop: 32 }}>
      {/* ===== SECÇÃO FINAL · OPORTUNIDADES, ATMOSFERA DISTINTA ===== */}
      <div style={{
        marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)", width: "100vw",
        background: "linear-gradient(180deg, #0B1220 0%, #101C30 100%)",
        position: "relative", overflow: "hidden", padding: "88px 32px 76px", marginTop: 8
      }}>
        <div className="glow-anim" style={{
          position: "absolute", top: "-10%", left: "8%", width: 420, height: 420, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.45) 0%, transparent 70%)", filter: "blur(10px)"
        }} />
        <div className="glow-anim" style={{
          position: "absolute", bottom: "-15%", right: "5%", width: 480, height: 480, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.30) 0%, transparent 70%)", filter: "blur(10px)",
          animationDelay: "3s"
        }} />

        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative" }}>
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 52px" }}>
            <div style={{ fontFamily: body, fontSize: 12, fontWeight: 700, color: blueLine, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>
              Próxima fase do projeto
            </div>
            <h2 style={{ fontFamily: display, fontSize: 36, fontWeight: 800, color: "#fff", margin: 0, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              Ações estratégicas para os próximos meses
            </h2>
            <p style={{ fontFamily: body, fontSize: 15, color: "#AEBBD0", marginTop: 16, lineHeight: 1.7 }}>
              O primeiro ciclo do Marketing 360 superou as metas definidas. Estes são os pontos com maior potencial
              para acelerar ainda mais o crescimento da Clínica Sorridente nos próximos meses.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 16 }}>
            {RECOMMENDATIONS.map((r) => (
              <div key={r.title} style={{
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)",
                backdropFilter: "blur(6px)", borderRadius: 16, padding: "22px 22px"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 16 }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: 10, background: "rgba(37,99,235,0.25)",
                    border: "1px solid rgba(37,99,235,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                  }}>
                    <r.icon size={16} color="#8FB2FF" strokeWidth={2} />
                  </div>
                  <div style={{ fontFamily: display, fontSize: 14.5, fontWeight: 700, color: "#fff", letterSpacing: "-0.01em", lineHeight: 1.25 }}>{r.title}</div>
                </div>

                <div style={{ fontFamily: body, fontSize: 10, fontWeight: 700, color: "#8FB2FF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>Objetivo</div>
                <p style={{ fontFamily: body, fontSize: 12, color: "#D7DFEC", lineHeight: 1.45, margin: "0 0 12px" }}>{r.objetivo}</p>

                <div style={{ fontFamily: body, fontSize: 10, fontWeight: 700, color: "#8FB2FF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>Ação</div>
                <p style={{ fontFamily: body, fontSize: 12, color: "#AEBBD0", lineHeight: 1.45, margin: "0 0 12px" }}>{r.acao}</p>

                <div style={{ fontFamily: body, fontSize: 10, fontWeight: 700, color: "#8FB2FF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Impacto esperado</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {r.impacto.map(item => (
                    <span key={item} style={{
                      display: "inline-flex", alignItems: "center", gap: 6, fontFamily: body, fontSize: 11.5, fontWeight: 600,
                      color: "#B9F0CE", background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)", padding: "5px 12px", borderRadius: 999, width: "fit-content"
                    }}>
                      <Check size={10} strokeWidth={3} /> {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 64, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.14)" }}>
            <div style={{ fontFamily: display, fontSize: 15, fontWeight: 800, color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 10 }}>
              Obrigado
            </div>
            <div style={{ fontFamily: display, fontSize: 34, fontWeight: 800, color: "#fff", letterSpacing: "0.02em" }}>
              Vamos avante!
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <PageNav>
          <PrevSectionButton label="Voltar ao plano de campanhas" onClick={() => goTo("plano-anual")} />
        </PageNav>
      </div>

        </div>
      )}

      {/* footer */}
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "32px 0 40px" }}>
        <div style={{ borderTop: `1px solid ${border}`, paddingTop: 22, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ fontFamily: body, fontSize: 11, color: mutedSoft, textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, marginBottom: 6 }}>
              Indicadores acompanhados
            </div>
            <div style={{ fontFamily: body, fontSize: 12.5, color: muted }}>
              Visualizações · Alcance · Interações · Visitas Perfil · Contas Envolvidas · Publicações
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: body, fontSize: 11, color: mutedSoft, textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, marginBottom: 6 }}>
              Período analisado
            </div>
            <div style={{ fontFamily: body, fontSize: 12.5, color: muted }}>Fevereiro → Junho 2026</div>
          </div>
        </div>
        <div style={{ textAlign: "center", paddingTop: 20 }}>
          <span style={{ fontFamily: body, fontSize: 11.5, color: mutedSoft }}>Desenvolvido por <strong style={{ color: muted }}>Your Vision Agency</strong></span>
        </div>
      </div>
    </div>
  );
}
