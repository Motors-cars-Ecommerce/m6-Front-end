export const Comment = ({ comment }: any) => {
  const { id, createdAt } = comment;

  const diffMs = Date.now() - new Date(String(createdAt));

  let diff, unit;

  if (diffMs < 60000) {
    diff = Math.round(diffMs / 1000);
    unit = "segundos";
  } else if (diffMs < 3600000) {
    diff = Math.round(diffMs / 60000);
    unit = "minutos";
  } else if (diffMs < 86400000) {
    diff = Math.round(diffMs / 3600000);
    unit = "horas";

    diff = Math.round(diffMs / 86400000);
    unit = "dias";
  } else if (diffMs < 2592000000) {
    diff = Math.round(diffMs / 604800000);
    unit = "semanas";
  } else {
    diff = Math.round(diffMs / 2592000000);
    unit = "meses";
  }

  return (
    <span>
      {diff} {unit} atrás
    </span>
  );
};
