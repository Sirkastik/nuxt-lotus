import SofaIcon from '~/components/icons/SofaIcon.vue'
import PlateIcon from '~/components/icons/PlateIcon.vue'
import KitchenIcon from '~/components/icons/KitchenIcon.vue'
import BedIcon from '~/components/icons/BedIcon.vue'
import KidsIcon from '~/components/icons/KidsIcon.vue'
import StudyIcon from '~/components/icons/StudyIcon.vue'
import OutdoorIcon from '~/components/icons/OutdoorIcon.vue'
import DecorIcon from '~/components/icons/DecorIcon.vue'

export const categoryList = [
  {
    name: 'Living Room',
    img: 'living-room',
    icon: SofaIcon,
    sub: [
      'TV Stands',
      'Wall Units',
      'Coffee Tables',
      'Tea Tables',
      'Side Tables',
      'Utensils Cabinet',
      'Consoles',
      'Ottoman Tables',
      'Sofas',
      'Couches',
      'Bean Bags',
      'Display Cabinets',
    ],
  },
  {
    name: 'Dining Room',
    img: 'dining-room',
    icon: PlateIcon,
    sub: ['Mirrors', 'Consoles', 'Dining Sets', 'Credenzas'],
  },
  {
    name: 'Kitchen',
    img: 'kitchen',
    icon: KitchenIcon,
    sub: ['Kitchen Cabinets', 'Bar Stools'],
  },
  {
    name: 'Bedroom',
    img: 'bedroom',
    icon: BedIcon,
    sub: [
      'Beds',
      'Chaise Lounge',
      'Bench',
      'Bean Bags',
      'Chest of Drawers',
      'Dressers',
      'Lamp Stands',
      'Bedside Tables',
      'Mirrors',
      'Shoe Racks',
      'Wallpapers',
      'Credenzas',
      'TV Stands',
    ],
  },
  {
    name: 'Other',
    img: null,
    icon: null,
    sub: [
      {
        name: 'Decor',
        img: 'decor',
        icon: DecorIcon,
        sub: [
          'Mirrors',
          'Carpets',
          'Wallpapers',
          'Lighting',
          'Paintings',
          'Plants',
          'Vases',
          'Area Rugs',
          'Lamp Stands',
        ],
      },
      {
        name: 'Kids',
        img: 'kids',
        icon: KidsIcon,
        sub: [
          'Baby Cots',
          'Rocking Chair',
          'Chest of Drawers',
          'Bunk Beds',
          'Study Tables',
        ],
      },
      {
        name: 'Study',
        img: 'study',
        icon: StudyIcon,
        sub: [
          'Study Tables',
          'Study Chairs',
          'Book Shelves',
          'Accent Chairs',
          'Lamp Stands',
        ],
      },
      {
        name: 'Outdoor',
        img: 'outdoor',
        icon: OutdoorIcon,
        sub: ['Patio Tables', 'Outdoor Chairs'],
      },
    ],
  },
]
