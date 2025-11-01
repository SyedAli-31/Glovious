// lib/sampleData.ts
import { Category, Product,  HeroSlide } from './data';

// Hero carousel slides
export const heroSlides: HeroSlide[] = [
    {
        id: '1',
        title: 'Safety Essentials at Your Fingertips',
        subtitle: 'Leading manufacturer of premium protective gloves',
        image: 'hero1'
    },
    {
        id: '2',
        title: 'Safety Solutions for a Better Tomorrow',
        subtitle: 'Your investment in safety matters',
        image: '1Generalpurpose'
    },
    {
        id: '3',
        title: 'Skill for Success, Build for Safety',
        subtitle: 'Create with care, defend with expertise',
        image: 'hero3'
    },
    {
        id: '4',
        title: 'Premium Quality Protective Gloves',
        subtitle: 'Trusted by industries worldwide',
        image: 'hero4'
    }
];

// Product categories
export const categories: Category[] = [
    {
        id: '1',
        name: 'Mechanical Gloves',
        slug: 'mechanical-gloves',
        description: 'Heavy-duty protection for mechanical work and maintenance',
        image: 'mechanical-gloves'
    },
    {
        id: '2',
        name: 'Assembly Gloves',
        slug: 'assembly-gloves',
        description: 'Precision and dexterity for assembly line operations',
        image: 'assembly-gloves'
    },
    {
        id: '3',
        name: 'Stick Welding Gloves',
        slug: 'stick-welding-gloves',
        description: 'Heat-resistant protection for heavy-duty welding',
        image: 'stick-welding-gloves'
    },
    {
        id: '4',
        name: 'Impact Gloves',
        slug: 'impact-gloves',
        description: 'Advanced impact protection for high-risk environments',
        image: 'impact-gloves'
    },
    {
        id: '5',
        name: 'Driver Gloves',
        slug: 'driver-gloves',
        description: 'Superior grip and comfort for professional drivers',
        image: 'driver-gloves'
    },
    {
        id: '6',
        name: 'Electrical Gloves',
        slug: 'electrical-gloves',
        description: 'Insulated protection for electrical work',
        image: 'electrical-gloves'
    },
    {
        id: '7',
        name: 'General Purpose Gloves',
        slug: 'general-purpose-gloves',
        description: 'Versatile protection for everyday industrial tasks',
        image: 'general-purpose-gloves'
    },
    {
        id: '8',
        name: 'TIG MIG Welding Gloves',
        slug: 'tig-mig-welding-gloves',
        description: 'Precision welding protection with superior dexterity',
        image: 'tig-mig-welding-gloves'
    }
];

// Sample products
export const products: Product[] = [
    {
        id: 'mech-01',
        name: 'Pro Mechanic Glove',
        slug: 'pro-mechanic-glove',
        categorySlug: 'mechanical-gloves',
        description: 'Premium leather mechanic glove with reinforced palm and knuckle protection',
        features: [
            'Full grain leather construction',
            'Reinforced knuckle guards',
            'Oil-resistant palm',
            'Adjustable wrist closure'
        ],
        specifications: {
            material: 'Premium Cowhide Leather',
            protection: 'Impact & Abrasion Resistant',
            sizes: 'S, M, L, XL, XXL',
            certification: 'EN 388:2016'
        },
        images: ['mech-1']
    },
    {
        id: 'mech-02',
        name: 'Pro Mechanic Glove',
        slug: 'pro-mechanic-glove2',
        categorySlug: 'mechanical-gloves',
        description: 'Premium leather mechanic glove with reinforced palm and knuckle protection',
        features: [
            'Full grain leather construction',
            'Reinforced knuckle guards',
            'Oil-resistant palm',
            'Adjustable wrist closure'
        ],
        specifications: {
            material: 'Premium Cowhide Leather',
            protection: 'Impact & Abrasion Resistant',
            sizes: 'S, M, L, XL, XXL',
            certification: 'EN 388:2016'
        },
        images: ['mech-1', 'mech-2']
    },
    {
        id: 'mech-03',
        name: 'Pro Mechanic Glove',
        slug: 'pro-mechanic-glove3',
        categorySlug: 'mechanical-gloves',
        description: 'Premium leather mechanic glove with reinforced palm and knuckle protection',
        features: [
            'Full grain leather construction',
            'Reinforced knuckle guards',
            'Oil-resistant palm',
            'Adjustable wrist closure'
        ],
        specifications: {
            material: 'Premium Cowhide Leather',
            protection: 'Impact & Abrasion Resistant',
            sizes: 'S, M, L, XL, XXL',
            certification: 'EN 388:2016'
        },
        images: ['mech-2', 'mech-1']
    },
    {
        id: 'mech-04',
        name: 'Pro Mechanic Glove',
        slug: 'pro-mechanic-glove4',
        categorySlug: 'mechanical-gloves',
        description: 'Premium leather mechanic glove with reinforced palm and knuckle protection',
        features: [
            'Full grain leather construction',
            'Reinforced knuckle guards',
            'Oil-resistant palm',
            'Adjustable wrist closure'
        ],
        specifications: {
            material: 'Premium Cowhide Leather',
            protection: 'Impact & Abrasion Resistant',
            sizes: 'S, M, L, XL, XXL',
            certification: 'EN 388:2016'
        },
        images: ['mech-2', 'mech-1']
    },
    {
        id: 'mech-05',
        name: 'Pro Mechanic Glove',
        slug: 'pro-mechanic-glove5',
        categorySlug: 'mechanical-gloves',
        description: 'Premium leather mechanic glove with reinforced palm and knuckle protection',
        features: [
            'Full grain leather construction',
            'Reinforced knuckle guards',
            'Oil-resistant palm',
            'Adjustable wrist closure'
        ],
        specifications: {
            material: 'Premium Cowhide Leather',
            protection: 'Impact & Abrasion Resistant',
            sizes: 'S, M, L, XL, XXL',
            certification: 'EN 388:2016'
        },
        images: ['mech-2', 'mech-1']
    },
    // Assembly gloves
    {
        id: 'asm-01',
        name: 'Precision Assembly Glove',
        slug: 'precision-assembly-glove',
        categorySlug: 'assembly-gloves',
        description: 'Lightweight assembly glove for precise handling and dexterity',
        features: [
            'Micro-foam nitrile coating',
            'Superior grip in dry conditions',
            'Breathable seamless liner',
            'Touch screen compatible'
        ],
        specifications: {
            material: 'Nylon with Nitrile Coating',
            protection: 'Cut Level A2',
            sizes: 'XS, S, M, L, XL'
        },
        images: ['asm-1']
    },
  
    {
        id: 'asm-02',
        name: 'Precision Assembly Glove',
        slug: 'precision-assembly-glove2',
        categorySlug: 'assembly-gloves',
        description: 'Lightweight assembly glove for precise handling and dexterity',
        features: [
            'Micro-foam nitrile coating',
            'Superior grip in dry conditions',
            'Breathable seamless liner',
            'Touch screen compatible'
        ],
        specifications: {
            material: 'Nylon with Nitrile Coating',
            protection: 'Cut Level A2',
            sizes: 'XS, S, M, L, XL'
        },
        images: ['asm-1']
    },
    {
        id: 'asm-03',
        name: 'Precision Assembly Glove',
        slug: 'precision-assembly-glove3',
        categorySlug: 'assembly-gloves',
        description: 'Lightweight assembly glove for precise handling and dexterity',
        features: [
            'Micro-foam nitrile coating',
            'Superior grip in dry conditions',
            'Breathable seamless liner',
            'Touch screen compatible'
        ],
        specifications: {
            material: 'Nylon with Nitrile Coating',
            protection: 'Cut Level A2',
            sizes: 'XS, S, M, L, XL'
        },
        images: ['asm-1']
    },
    {
        id: 'asm-04',
        name: 'Precision Assembly Glove',
        slug: 'precision-assembly-glove4',
        categorySlug: 'assembly-gloves',
        description: 'Lightweight assembly glove for precise handling and dexterity',
        features: [
            'Micro-foam nitrile coating',
            'Superior grip in dry conditions',
            'Breathable seamless liner',
            'Touch screen compatible'
        ],
        specifications: {
            material: 'Nylon with Nitrile Coating',
            protection: 'Cut Level A2',
            sizes: 'XS, S, M, L, XL'
        },
        images: ['asm-2']
    },
    {
        id: 'asm-05',
        name: 'Precision Assembly Glove',
        slug: 'precision-assembly-glove5',
        categorySlug: 'assembly-gloves',
        description: 'Lightweight assembly glove for precise handling and dexterity',
        features: [
            'Micro-foam nitrile coating',
            'Superior grip in dry conditions',
            'Breathable seamless liner',
            'Touch screen compatible'
        ],
        specifications: {
            material: 'Nylon with Nitrile Coating',
            protection: 'Cut Level A2',
            sizes: 'XS, S, M, L, XL'
        },
        images: ['asm-1']
    },
    {
        id: 'asm-06',
        name: 'Precision Assembly Glove',
        slug: 'precision-assembly-glove6',
        categorySlug: 'assembly-gloves',
        description: 'Lightweight assembly glove for precise handling and dexterity',
        features: [
            'Micro-foam nitrile coating',
            'Superior grip in dry conditions',
            'Breathable seamless liner',
            'Touch screen compatible'
        ],
        specifications: {
            material: 'Nylon with Nitrile Coating',
            protection: 'Cut Level A2',
            sizes: 'XS, S, M, L, XL'
        },
        images: ['asm-2']
    },
    // welding glove
    {
        id: 'weld-01',
        name: 'Heavy Duty Stick Welding Glove',
        slug: 'heavy-duty-stick-welding-glove1',
        categorySlug: 'stick-welding-gloves',
        description: 'Heat-resistant leather glove designed for stick welding applications',
        features: [
            'Split leather construction',
            'Heat resistant up to 350°C',
            'Reinforced thumb and index finger',
            'Extended cuff protection'
        ],
        specifications: {
            material: 'Split Cowhide Leather',
            protection: 'Heat & Flame Resistant',
            sizes: 'M, L, XL, XXL',
            certification: 'EN 407'
        },
        images: ['weld-1']
    },
    {
        id: 'weld-02',
        name: 'Heavy Duty Stick Welding Glove',
        slug: 'heavy-duty-stick-welding-glove2',
        categorySlug: 'stick-welding-gloves',
        description: 'Heat-resistant leather glove designed for stick welding applications',
        features: [
            'Split leather construction',
            'Heat resistant up to 350°C',
            'Reinforced thumb and index finger',
            'Extended cuff protection'
        ],
        specifications: {
            material: 'Split Cowhide Leather',
            protection: 'Heat & Flame Resistant',
            sizes: 'M, L, XL, XXL',
            certification: 'EN 407'
        },
        images: ['weld-1']
    },
    {
        id: 'weld-03',
        name: 'Heavy Duty Stick Welding Glove',
        slug: 'heavy-duty-stick-welding-glove3',
        categorySlug: 'stick-welding-gloves',
        description: 'Heat-resistant leather glove designed for stick welding applications',
        features: [
            'Split leather construction',
            'Heat resistant up to 350°C',
            'Reinforced thumb and index finger',
            'Extended cuff protection'
        ],
        specifications: {
            material: 'Split Cowhide Leather',
            protection: 'Heat & Flame Resistant',
            sizes: 'M, L, XL, XXL',
            certification: 'EN 407'
        },
        images: ['weld-2']
    },
    {
        id: 'weld-04',
        name: 'Heavy Duty Stick Welding Glove',
        slug: 'heavy-duty-stick-welding-glove4',
        categorySlug: 'stick-welding-gloves',
        description: 'Heat-resistant leather glove designed for stick welding applications',
        features: [
            'Split leather construction',
            'Heat resistant up to 350°C',
            'Reinforced thumb and index finger',
            'Extended cuff protection'
        ],
        specifications: {
            material: 'Split Cowhide Leather',
            protection: 'Heat & Flame Resistant',
            sizes: 'M, L, XL, XXL',
            certification: 'EN 407'
        },
        images: ['weld-2']
    },
    {
        id: 'weld-05',
        name: 'Heavy Duty Stick Welding Glove',
        slug: 'heavy-duty-stick-welding-glove5',
        categorySlug: 'stick-welding-gloves',
        description: 'Heat-resistant leather glove designed for stick welding applications',
        features: [
            'Split leather construction',
            'Heat resistant up to 350°C',
            'Reinforced thumb and index finger',
            'Extended cuff protection'
        ],
        specifications: {
            material: 'Split Cowhide Leather',
            protection: 'Heat & Flame Resistant',
            sizes: 'M, L, XL, XXL',
            certification: 'EN 407'
        },
        images: ['weld-1']
    },
    // Impact Gloves
    {
        id: 'imp-01',
        name: 'Impact Pro Safety Glove',
        slug: 'impact-pro-safety-glove1',
        categorySlug: 'impact-gloves',
        description: 'Advanced TPR impact protection for knuckles and fingers',
        features: [
            'TPR impact guards on knuckles',
            'Synthetic leather palm',
            'Cut-resistant liner',
            'Reflective accents for visibility'
        ],
        specifications: {
            material: 'Synthetic Leather with TPR',
            protection: 'Impact Level 3, Cut Level A4',
            sizes: 'M, L, XL, XXL'
        },
        images: ['imp-1']
    },
    {
        id: 'imp-02',
        name: 'Impact Pro Safety Glove',
        slug: 'impact-pro-safety-glove2',
        categorySlug: 'impact-gloves',
        description: 'Advanced TPR impact protection for knuckles and fingers',
        features: [
            'TPR impact guards on knuckles',
            'Synthetic leather palm',
            'Cut-resistant liner',
            'Reflective accents for visibility'
        ],
        specifications: {
            material: 'Synthetic Leather with TPR',
            protection: 'Impact Level 3, Cut Level A4',
            sizes: 'M, L, XL, XXL'
        },
        images: ['imp-1']
    },
    {
        id: 'imp-03',
        name: 'Impact Pro Safety Glove',
        slug: 'impact-pro-safety-glove3',
        categorySlug: 'impact-gloves',
        description: 'Advanced TPR impact protection for knuckles and fingers',
        features: [
            'TPR impact guards on knuckles',
            'Synthetic leather palm',
            'Cut-resistant liner',
            'Reflective accents for visibility'
        ],
        specifications: {
            material: 'Synthetic Leather with TPR',
            protection: 'Impact Level 3, Cut Level A4',
            sizes: 'M, L, XL, XXL'
        },
        images: ['imp-1']
    },
    {
        id: 'imp-04',
        name: 'Impact Pro Safety Glove',
        slug: 'impact-pro-safety-glove4',
        categorySlug: 'impact-gloves',
        description: 'Advanced TPR impact protection for knuckles and fingers',
        features: [
            'TPR impact guards on knuckles',
            'Synthetic leather palm',
            'Cut-resistant liner',
            'Reflective accents for visibility'
        ],
        specifications: {
            material: 'Synthetic Leather with TPR',
            protection: 'Impact Level 3, Cut Level A4',
            sizes: 'M, L, XL, XXL'
        },
        images: ['imp-2']
    },
    {
        id: 'imp-05',
        name: 'Impact Pro Safety Glove',
        slug: 'impact-pro-safety-glove5',
        categorySlug: 'impact-gloves',
        description: 'Advanced TPR impact protection for knuckles and fingers',
        features: [
            'TPR impact guards on knuckles',
            'Synthetic leather palm',
            'Cut-resistant liner',
            'Reflective accents for visibility'
        ],
        specifications: {
            material: 'Synthetic Leather with TPR',
            protection: 'Impact Level 3, Cut Level A4',
            sizes: 'M, L, XL, XXL'
        },
        images: ['imp-2']
    },
    // Driving Gloves
    {
        id: 'drv-01',
        name: 'Professional Driver Glove',
        slug: 'professional-driver-glove1',
        categorySlug: 'driver-gloves',
        description: 'Premium leather driving glove with superior grip and comfort',
        features: [
            'Full grain leather',
            'Perforated for breathability',
            'Ergonomic finger design',
            'Secure velcro closure'
        ],
        specifications: {
            material: 'Premium Goatskin Leather',
            protection: 'Abrasion Resistant',
            sizes: 'S, M, L, XL'
        },
        images: ['drv-1']
    },
    {
        id: 'drv-02',
        name: 'Professional Driver Glove',
        slug: 'professional-driver-glove2',
        categorySlug: 'driver-gloves',
        description: 'Premium leather driving glove with superior grip and comfort',
        features: [
            'Full grain leather',
            'Perforated for breathability',
            'Ergonomic finger design',
            'Secure velcro closure'
        ],
        specifications: {
            material: 'Premium Goatskin Leather',
            protection: 'Abrasion Resistant',
            sizes: 'S, M, L, XL'
        },
        images: ['drv-1']
    },
    {
        id: 'drv-03',
        name: 'Professional Driver Glove',
        slug: 'professional-driver-glove3',
        categorySlug: 'driver-gloves',
        description: 'Premium leather driving glove with superior grip and comfort',
        features: [
            'Full grain leather',
            'Perforated for breathability',
            'Ergonomic finger design',
            'Secure velcro closure'
        ],
        specifications: {
            material: 'Premium Goatskin Leather',
            protection: 'Abrasion Resistant',
            sizes: 'S, M, L, XL'
        },
        images: ['drv-2']
    },
    {
        id: 'drv-04',
        name: 'Professional Driver Glove',
        slug: 'professional-driver-glove4',
        categorySlug: 'driver-gloves',
        description: 'Premium leather driving glove with superior grip and comfort',
        features: [
            'Full grain leather',
            'Perforated for breathability',
            'Ergonomic finger design',
            'Secure velcro closure'
        ],
        specifications: {
            material: 'Premium Goatskin Leather',
            protection: 'Abrasion Resistant',
            sizes: 'S, M, L, XL'
        },
        images: ['drv-2']
    },
    {
        id: 'drv-05',
        name: 'Professional Driver Glove',
        slug: 'professional-driver-glove5',
        categorySlug: 'driver-gloves',
        description: 'Premium leather driving glove with superior grip and comfort',
        features: [
            'Full grain leather',
            'Perforated for breathability',
            'Ergonomic finger design',
            'Secure velcro closure'
        ],
        specifications: {
            material: 'Premium Goatskin Leather',
            protection: 'Abrasion Resistant',
            sizes: 'S, M, L, XL'
        },
        images: ['drv-1']
    },
    {
        id: 'drv-06',
        name: 'Professional Driver Glove',
        slug: 'professional-driver-glove6',
        categorySlug: 'driver-gloves',
        description: 'Premium leather driving glove with superior grip and comfort',
        features: [
            'Full grain leather',
            'Perforated for breathability',
            'Ergonomic finger design',
            'Secure velcro closure'
        ],
        specifications: {
            material: 'Premium Goatskin Leather',
            protection: 'Abrasion Resistant',
            sizes: 'S, M, L, XL'
        },
        images: ['drv-2']
    },
    // Electrical Gloves
    {
        id: 'elec-01',
        name: 'Insulated Electrical Glove',
        slug: 'insulated-electrical-glove1',
        categorySlug: 'electrical-gloves',
        description: 'High-voltage insulated glove for electrical safety',
        features: [
            'Class 0 voltage protection',
            'Natural rubber insulation',
            'Leak-proof construction',
            'Color-coded for voltage class'
        ],
        specifications: {
            material: 'Natural Rubber',
            protection: 'Voltage Resistant up to 1000V',
            sizes: 'M, L, XL',
            certification: 'IEC 60903'
        },
        images: ['elec-2']
    },
    {
        id: 'elec-02',
        name: 'Insulated Electrical Glove',
        slug: 'insulated-electrical-glove2',
        categorySlug: 'electrical-gloves',
        description: 'High-voltage insulated glove for electrical safety',
        features: [
            'Class 0 voltage protection',
            'Natural rubber insulation',
            'Leak-proof construction',
            'Color-coded for voltage class'
        ],
        specifications: {
            material: 'Natural Rubber',
            protection: 'Voltage Resistant up to 1000V',
            sizes: 'M, L, XL',
            certification: 'IEC 60903'
        },
        images: ['elec-1']
    },
    {
        id: 'elec-03',
        name: 'Insulated Electrical Glove',
        slug: 'insulated-electrical-glove3',
        categorySlug: 'electrical-gloves',
        description: 'High-voltage insulated glove for electrical safety',
        features: [
            'Class 0 voltage protection',
            'Natural rubber insulation',
            'Leak-proof construction',
            'Color-coded for voltage class'
        ],
        specifications: {
            material: 'Natural Rubber',
            protection: 'Voltage Resistant up to 1000V',
            sizes: 'M, L, XL',
            certification: 'IEC 60903'
        },
        images: ['elec-2']
    },
    // General Purpose Gloves
    {
        id: 'gen-01',
        name: 'General Purpose Work Glove',
        slug: 'general-purpose-work-glove1',
        categorySlug: 'general-purpose-gloves',
        description: 'Versatile cotton/polyester blend for general industrial work',
        features: [
            'Cotton canvas construction',
            'PVC dotted palm for grip',
            'Knit wrist keeps debris out',
            'Machine washable'
        ],
        specifications: {
            material: 'Cotton/Polyester Blend',
            protection: 'General Purpose',
            sizes: 'L, XL, XXL'
        },
        images: ['gen-1']
    },
    {
        id: 'gen-02',
        name: 'General Purpose Work Glove',
        slug: 'general-purpose-work-glove2',
        categorySlug: 'general-purpose-gloves',
        description: 'Versatile cotton/polyester blend for general industrial work',
        features: [
            'Cotton canvas construction',
            'PVC dotted palm for grip',
            'Knit wrist keeps debris out',
            'Machine washable'
        ],
        specifications: {
            material: 'Cotton/Polyester Blend',
            protection: 'General Purpose',
            sizes: 'L, XL, XXL'
        },
        images: ['gen-1']
    },
    {
        id: 'gen-03',
        name: 'General Purpose Work Glove',
        slug: 'general-purpose-work-glove3',
        categorySlug: 'general-purpose-gloves',
        description: 'Versatile cotton/polyester blend for general industrial work',
        features: [
            'Cotton canvas construction',
            'PVC dotted palm for grip',
            'Knit wrist keeps debris out',
            'Machine washable'
        ],
        specifications: {
            material: 'Cotton/Polyester Blend',
            protection: 'General Purpose',
            sizes: 'L, XL, XXL'
        },
        images: ['gen-1']
    },
    {
        id: 'gen-04',
        name: 'General Purpose Work Glove',
        slug: 'general-purpose-work-glove4',
        categorySlug: 'general-purpose-gloves',
        description: 'Versatile cotton/polyester blend for general industrial work',
        features: [
            'Cotton canvas construction',
            'PVC dotted palm for grip',
            'Knit wrist keeps debris out',
            'Machine washable'
        ],
        specifications: {
            material: 'Cotton/Polyester Blend',
            protection: 'General Purpose',
            sizes: 'L, XL, XXL'
        },
        images: ['gen-2']
    },
    {
        id: 'gen-05',
        name: 'General Purpose Work Glove',
        slug: 'general-purpose-work-glove5',
        categorySlug: 'general-purpose-gloves',
        description: 'Versatile cotton/polyester blend for general industrial work',
        features: [
            'Cotton canvas construction',
            'PVC dotted palm for grip',
            'Knit wrist keeps debris out',
            'Machine washable'
        ],
        specifications: {
            material: 'Cotton/Polyester Blend',
            protection: 'General Purpose',
            sizes: 'L, XL, XXL'
        },
        images: ['gen-2']
    },
    // TigMIg Gloves
    {
        id: 'tigmig-01',
        name: 'TIG/MIG Precision Welding Glove',
        slug: 'tig-mig-precision-welding-glove1',
        categorySlug: 'tig-mig-welding-gloves',
        description: 'Thin and flexible glove for precision TIG/MIG welding operations',
        features: [
            'Premium grain leather',
            'Kevlar stitching',
            'Superior tactile sensitivity',
            'Form-fitting design'
        ],
        specifications: {
            material: 'Premium Grain Leather',
            protection: 'Heat Resistant up to 250°C',
            sizes: 'S, M, L, XL',
            certification: 'EN 407'
        },
        images: ['tigmig-1']
    },
     {
        id: 'tigmig-02',
        name: 'TIG/MIG Precision Welding Glove',
        slug: 'tig-mig-precision-welding-glove2',
        categorySlug: 'tig-mig-welding-gloves',
        description: 'Thin and flexible glove for precision TIG/MIG welding operations',
        features: [
            'Premium grain leather',
            'Kevlar stitching',
            'Superior tactile sensitivity',
            'Form-fitting design'
        ],
        specifications: {
            material: 'Premium Grain Leather',
            protection: 'Heat Resistant up to 250°C',
            sizes: 'S, M, L, XL',
            certification: 'EN 407'
        },
        images: ['tigmig-1']
    },
     {
        id: 'tigmig-03',
        name: 'TIG/MIG Precision Welding Glove',
        slug: 'tig-mig-precision-welding-glove3',
        categorySlug: 'tig-mig-welding-gloves',
        description: 'Thin and flexible glove for precision TIG/MIG welding operations',
        features: [
            'Premium grain leather',
            'Kevlar stitching',
            'Superior tactile sensitivity',
            'Form-fitting design'
        ],
        specifications: {
            material: 'Premium Grain Leather',
            protection: 'Heat Resistant up to 250°C',
            sizes: 'S, M, L, XL',
            certification: 'EN 407'
        },
        images: ['tigmig-2']
    },
    {
        id: 'tigmig-04',
        name: 'TIG/MIG Precision Welding Glove',
        slug: 'tig-mig-precision-welding-glove4',
        categorySlug: 'tig-mig-welding-gloves',
        description: 'Thin and flexible glove for precision TIG/MIG welding operations',
        features: [
            'Premium grain leather',
            'Kevlar stitching',
            'Superior tactile sensitivity',
            'Form-fitting design'
        ],
        specifications: {
            material: 'Premium Grain Leather',
            protection: 'Heat Resistant up to 250°C',
            sizes: 'S, M, L, XL',
            certification: 'EN 407'
        },
        images: ['tigmig-2']
    }
];

// Blog Post Type Definition
export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    image: string;
    date: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Safety Guidelines for Industrial Glove Selection",
        slug: "safety-guidelines-industrial-glove-selection",
        excerpt: "Learn how to select the right protective gloves for your specific industrial applications and ensure maximum safety compliance.",
        image: "/blog1.jpg",
        date: "2024-01-15"
    },
    {
        id: 2,
        title: "Heat Resistant Gloves in Welding: Why Quality Matters",
        slug: "heat-resistant-gloves-welding-quality",
        excerpt: "Discover the importance of quality heat-resistant gloves in welding operations and how they protect workers from extreme temperatures.",
        image: "/blog2.png",
        date: "2024-01-10"
    },
    {
        id: 3,
        title: "Maximizing Safety with Cut-Resistant Gloves",
        slug: "maximizing-safety-cut-resistant-gloves",
        excerpt: "Explore the latest innovations in cut-resistant glove technology and how they're revolutionizing workplace safety standards.",
        image: "/blog3.jpg",
        date: "2024-01-05"
    }
];
