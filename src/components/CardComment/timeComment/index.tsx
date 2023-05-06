export const Comment = ({ comment }: any) => {
  const { id, createdAt } = comment;
  // Calcula a diferença em milissegundos entre a data de criação do comentário e a data atual
  const diffMs = Date.now() - new Date(String(createdAt));

  // Converte a diferença em dias, semanas ou meses
  let diff, unit;

  if (diffMs < 60000) {
    // menos de 1 minuto
    diff = Math.round(diffMs / 1000);
    unit = "segundos";
  } else if (diffMs < 3600000) {
    // menos de 1 hora
    diff = Math.round(diffMs / 60000);
    unit = "minutos";
  } else if (diffMs < 86400000) {
    // menos de 1 dia
    diff = Math.round(diffMs / 3600000);
    unit = "horas";
  } else if (diffMs < 604800000) {
    // menos de 1 semana
    diff = Math.round(diffMs / 86400000);
    unit = "dias";
  } else if (diffMs < 2592000000) {
    // menos de 1 mês
    diff = Math.round(diffMs / 604800000);
    unit = "semanas";
  } else {
    // mais de 1 mês
    diff = Math.round(diffMs / 2592000000);
    unit = "meses";
  }

  return (
    <span>
      {diff} {unit} atrás
    </span>
  );
};
