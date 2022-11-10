import "../styles/Application.css";

export const Application = ({
  id,
  logo,
  icon,
  enabled,
  applicationStatus,
  version,
}) => {
  return (
    <article>
      <div
        className={`app ${
          enabled && applicationStatus.published ? "" : "desactiva"
        }`}
      >
        {icon && (
          <span className="icon">
            <img src={icon} alt="icon" />
          </span>
        )}
        {logo && (
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        )}

        {applicationStatus.published ? (
          enabled ? (
            <h5>Versión {version}</h5>
          ) : (
            <button>Adquirir</button>
          )
        ) : (
          <span className="coming-soon">
            <h5>Próximamente</h5>
          </span>
        )}
      </div>
      {enabled && applicationStatus.published && (
        <button>Mira las novedades</button>
      )}
    </article>
  );
};
