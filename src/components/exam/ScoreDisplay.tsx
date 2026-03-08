import { Lang, tr } from '@/lib/i18n';
import GlassCard from '@/components/ui/GlassCard';
import CTAButton from '@/components/ui/CTAButton';
import SectionHeader from '@/components/ui/SectionHeader';

interface ScoreDisplayProps {
  correct: number;
  total: number;
  weakCategories: string[];
  lang: Lang;
  onRestart: () => void;
}

const categoryLabels: Record<string, { fr: string; en: string }> = {
  'Road Rules': { fr: 'Règles de la route', en: 'Road Rules' },
  'Road Signs': { fr: 'Signalisation routière', en: 'Road Signs' },
  'Motorcycle Safety': { fr: 'Sécurité et technique', en: 'Motorcycle Safety' },
  'Quebec Law': { fr: 'Loi québécoise et SAAQ', en: 'Quebec Law' },
  'Ontario Law': { fr: 'Loi ontarienne et MTO', en: 'Ontario Law' },
  'Riding Scenarios': { fr: 'Scénarios de conduite', en: 'Riding Scenarios' },
};

export default function ScoreDisplay({ correct, total, weakCategories, lang, onRestart }: ScoreDisplayProps) {
  const pct = Math.round((correct / total) * 100);
  const passed = pct >= 80;

  return (
    <section style={{ padding: '32px 20px' }}>
      <SectionHeader label={tr('scoreLabel', lang)} heading={tr('yourScore', lang)} accentColor="#16a34a" />

      <GlassCard style={{ padding: 32, textAlign: 'center', marginBottom: 20 }}>
        {/* Score circle */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            border: `4px solid ${passed ? '#16a34a' : '#dc2626'}`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            background: passed ? '#16a34a10' : '#dc262610',
          }}
        >
          <span style={{ fontSize: 32, fontWeight: 800, color: passed ? '#16a34a' : '#dc2626' }}>
            {pct}%
          </span>
          <span style={{ fontSize: 11, color: '#6b6b80' }}>
            {correct}/{total}
          </span>
        </div>

        {/* Status */}
        <p style={{ fontSize: 16, fontWeight: 700, color: passed ? '#16a34a' : '#dc2626', marginBottom: 8 }}>
          {passed ? tr('passed', lang) : tr('failed', lang)}
        </p>
        <p style={{ fontSize: 12, color: '#6b6b80' }}>{tr('passThreshold', lang)}</p>
      </GlassCard>

      {/* Weak areas */}
      {weakCategories.length > 0 && (
        <GlassCard style={{ padding: 24, marginBottom: 20 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#D4AF37', marginBottom: 12 }}>
            ⚠️ {tr('weakAreas', lang)}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {weakCategories.map((cat) => (
              <span
                key={cat}
                style={{
                  background: '#dc262615',
                  border: '1px solid #dc262640',
                  borderRadius: 20,
                  padding: '4px 12px',
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#dc2626',
                }}
              >
                {categoryLabels[cat]?.[lang] ?? cat}
              </span>
            ))}
          </div>
        </GlassCard>
      )}

      <CTAButton onClick={onRestart} variant="secondary" accentColor="#16a34a" fullWidth>
        🔄 {tr('restartQuiz', lang)}
      </CTAButton>
    </section>
  );
}
