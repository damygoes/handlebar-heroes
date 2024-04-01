import { TeamMember } from '@/types/team-member'

type TeamMemberCardProps = {
  teamMember: TeamMember
}

const TeamMemberCard = ({ teamMember }: TeamMemberCardProps) => {
  return (
    <div className='group relative block bg-background'>
      <img
        alt={teamMember.name}
        src={teamMember.image}
        className='absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50'
      />

      <div className='relative p-4 sm:p-6 lg:p-8'>
        <p className='text-xs font-light uppercase text-foreground'>
          {teamMember.position}
        </p>

        <p className='text-2xl font-bold text-copy sm:text-2xl'>
          {teamMember.name}
        </p>

        <div className='mt-32 sm:mt-48 lg:mt-64'>
          <div className='translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
            <p className='text-sm text-foreground'>
              {teamMember.roleDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMemberCard
