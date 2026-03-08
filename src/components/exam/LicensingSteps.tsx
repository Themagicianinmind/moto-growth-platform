import { licensingSteps, Province } from '@/lib/exam-data';
import { Lang, tr } from '@/lib/i18n';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeader from '@/components/ui/SectionHeader';
import AudioButton from '@/components/ui/AudioButton';

interface LicensingStepsProps {
  province: Province;
  lang: Lang;
  audioEnabled: boolean;
}

export default function LicensingSteps({ province, lang, audioEnabled }: LicensingStepsProps) {
  const steps = licensingSteps.filter((s) => s.province === province);

  return (
    <section style={{ padding: '48px 20px' }}>
      <SectionHeader
        label={tr('licensingLabel', lang)}
        heading={tr('licensingHeading', lang)}
        accentColor="#0d9488"
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {steps.map((step, idx) => {
          const title = lang === 'fr' ? step.titleFr : step.titleEn;
          const desc = lang === 'fr' ? step.descFr : step.descEn;
          const spokenText = `${tr('step', lang)} ${step.stepNumber}: ${title}. ${desc}`;
          const isLast = idx === steps.length - 1;

          return (
            <div key={step.id} style={{ display: 'flex', gap: 16 }}>
              {/* Step number + connector line */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: '#0d948815',
                    border: '2px solid #0d948860',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                    fontWeight: 800,
                    color: '#0d9488',
                    flexShrink: 0,
                  }}
                >
                  {step.stepNumber}
                </div>
                {!isLast && (
                  <div style={{ width: 2, flex: 1, background: '#1e1e35', marginTop: 4, marginBottom: 4, minHeight: 24 }} />
                )}
              </div>

              {/* Content */}
              <GlassCard style={{ padding: '16px 20px', marginBottom: isLast ? 0 : 12, flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#e8e8f0', flex: 1 }}>{title}</p>
                  {audioEnabled && (
                    <AudioButton text={spokenText} lang={lang} size="sm" />
                  )}
                </div>
                <p style={{ fontSize: 12, color: '#a0a0b8', lineHeight: 1.6 }}>{desc}</p>
              </GlassCard>
            </div>
          );
        })}
      </div>
    </section>
  );
}
