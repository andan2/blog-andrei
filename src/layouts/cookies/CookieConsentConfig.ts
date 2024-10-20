import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export const config: CookieConsentConfig = {
  root: '#cc-container',

  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom left',
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
    analytics: {
      services: {
        ga4: {
          label:
            '<a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank">Google Analytics 4</a>',
          onAccept: () => {
            console.log('ga4 aceptado');
            // TODO: cargar ga4
          },
          onReject: () => {
            console.log('ga4 rechazado');
          },
          cookies: [
            {
              name: /^_ga/,
            },
          ],
        },
        disqus: {
          label: 'Disqus (sistema de comentarios)',
        },
      },
    },
  },
  language: {
    default: 'es',
    autoDetect: 'browser',
    translations: {
      es: {
        consentModal: {
          title: "🍪 Aviso de cookies",
          description:
            'Uso cookies para mejorar tu experiencia y entender cómo interactúas con mi contenido. ¿Me das permiso para utilizarlas?',
          acceptAllBtn: 'Aceptar todas',
          acceptNecessaryBtn: 'Solo las necesarias',
          showPreferencesBtn: 'Personalizar',
          footer:
            '<a href="/politica-de-privacidad">Política de Privacidad</a>\n<a href="/politica-de-cookies">Política de cookies</a>',
        },
        preferencesModal: {
          title: 'Preferencias de Cookies',
          acceptAllBtn: 'Aceptar todas',
          acceptNecessaryBtn: 'Solo las necesarias',
          savePreferencesBtn: 'Guardar preferencias',
          closeIconLabel: 'Cerrar',
          serviceCounterLabel: 'Servicio|Servicios',
          sections: [
            {
              title: 'Uso de Cookies en Mi Blog',
              description:
                'Las cookies me ayudan a ofrecerte una mejor experiencia al navegar por mi blog. Algunas son esenciales para el funcionamiento del sitio, mientras que otras me ayudan a mejorarlo.',
            },
            {
              title:
                'Cookies Necesarias <span class="pm__badge">Siempre Activas</span>',
              description:
                'Estas cookies son imprescindibles para el funcionamiento básico de mi blog. Garantizan funciones de seguridad y preferencias básicas, pero no almacenan ninguna información personal.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Cookies de Funcionalidad',
              description:
                'Estas cookies permiten funcionalidades adicionales, como guardar tus preferencias de tema (claro/oscuro) o recordar tu sesión para que no tengas que iniciar sesión cada vez que visites el blog.',
              linkedCategory: 'functionality',
            },
            {
              title: 'Cookies Analíticas',
              description:
                'Utilizo estas cookies para entender cómo interactúas con mi blog. Me ayudan a saber qué contenido es más popular y cómo puedo mejorar la experiencia general. Toda la información es anónima y agregada.',
              linkedCategory: 'analytics',
            },
            {
              title: 'Más información',
              description:
                'Si tienes alguna pregunta sobre cómo uso las cookies o quieres saber más sobre mi política de privacidad, no dudes en <a class="cc__link" href="/contacto">contactarme</a>. ¡Estaré encantado de ayudarte!',
            },
          ],
        },
      },
    },
  },
};