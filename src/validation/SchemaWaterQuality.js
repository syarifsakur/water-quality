import { z } from 'zod';

const waterQualitySchema = z.object({
  river_name: z.string().min(1, 'Nama sungai harus diisi'),
  pollution_index: z.number().min(0, 'Indeks pencemar tidak boleh negatif'),
  water_quality_status: z.enum(
    ['memenuhi bakumutu', 'cemar ringan', 'cemar sedang', 'cemar berat'],
    {
      message:
        "status kualitas air harus 'memenuhi bakumutu', 'cemar ringan', 'cemar sedang', atau 'cemar berat'",
    }
  ),
  critical_parameters: z.enum(
    ['amonia', 'bod', 'cod', 'do', 'nitrat', 'ph', 'tds', 'tss'],
    {
      message:
        "parameter kritis harus 'amonia','bod','cod','do','nitrat','ph','tds', atau 'tss', ",
    }
  ),
  date: z
    .string()
    .optional()
    .refine((date) => !date || !isNaN(Date.parse(date)), {
      message: 'Format tanggal tidak valid',
    }),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
});

export { waterQualitySchema };
