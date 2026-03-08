import { gearItems } from '@/lib/exam-data';
import { Lang, tr } from '@/lib/i18n';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeader from '@/components/ui/SectionHeader';
import AudioButton from '@/components/ui/AudioButton';

interface GearChecklistProps {
  lang: Lang;
  audioEnabled: boolean;
}

export default function GearChecklist({ lang, audioEnabled }: GearChecklistProps) {
  return (
    <section style={{ padding: '48px 20px', background: '#0a0a15' }}>
      <SectionHeader
        label={tr('gearLabel', lang)}
        heading={tr('gearHeading', lang)}
        accentColor="#D4AF37"
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {gearItems.map((item) => {
          const name = lang === 'fr' ? item.nameFr : item.nameEn;
          const desc = lang === 'fr' ? item.descFr : item.descEn;
          const spokenText = `${name}. ${desc}`;

          return (
            <GlassCard key={item.id} style={{ padding: '16px 20px' }}>
              <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                {/* Icon */}
                <div style={{ fontSize: 24, flexShrink: 0, marginTop: 2 }}>{item.icon}</div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#e8e8f0' }}>{name}</p>
                    <span
                      style={{
                        background: item.critical ? '#dc262615' : '#D4AF3715',
                        border: `1px solid ${item.critical ? '#dc262640' : '#D4AF3740'}`,
                        borderRadius: 20,
                        padding: '2px 8px',
                        fontSize: 10,
                        fontWeight: 700,
                        color: item.critical ? '#dc2626' : '#D4AF37',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {item.critical ? tr('critical', lang) : tr('optional', lang)}
                    </span>
                    {audioEnabled && (
                      <AudioButton text={spokenText} lang={lang} size="sm" />
                    )}
                  </div>
                  <p style={{ fontSize: 12, color: '#a0a0b8', lineHeight: 1.6 }}>{desc}</p>
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
