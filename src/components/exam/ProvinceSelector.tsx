import { Province } from '@/lib/exam-data';
import { Lang, tr } from '@/lib/i18n';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeader from '@/components/ui/SectionHeader';

interface ProvinceSelectorProps {
  lang: Lang;
  onSelect: (province: Province) => void;
}

export default function ProvinceSelector({ lang, onSelect }: ProvinceSelectorProps) {
  return (
    <section style={{ padding: '32px 20px' }}>
      <SectionHeader
        label={tr('selectProvinceLabel', lang)}
        heading={tr('selectProvince', lang)}
        accentColor="#16a34a"
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, maxWidth: 480 }}>
        {/* Quebec */}
        <button
          onClick={() => onSelect('qc')}
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
        >
          <GlassCard
            style={{
              padding: 24,
              textAlign: 'center',
              transition: 'all 0.2s',
            }}
          >
            <div style={{ fontSize: 36, marginBottom: 12 }}>🔵</div>
            <p style={{ fontSize: 18, fontWeight: 800, color: '#e8e8f0', marginBottom: 4 }}>
              {tr('quebecLabel', lang)}
            </p>
            <p style={{ fontSize: 12, color: '#6b6b80' }}>{tr('quebecSub', lang)}</p>
          </GlassCard>
        </button>

        {/* Ontario */}
        <button
          onClick={() => onSelect('on')}
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
        >
          <GlassCard
            style={{
              padding: 24,
              textAlign: 'center',
              transition: 'all 0.2s',
            }}
          >
            <div style={{ fontSize: 36, marginBottom: 12 }}>🔴</div>
            <p style={{ fontSize: 18, fontWeight: 800, color: '#e8e8f0', marginBottom: 4 }}>
              {tr('ontarioLabel', lang)}
            </p>
            <p style={{ fontSize: 12, color: '#6b6b80' }}>{tr('ontarioSub', lang)}</p>
          </GlassCard>
        </button>
      </div>
    </section>
  );
}
