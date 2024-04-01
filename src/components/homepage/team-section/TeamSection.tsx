import { cn } from '@/lib/utils'
import TeamMemberCard from './TeamMemberCard'
import { teamMembers } from './TeamMembersList'

const TeamSection = () => {
  return (
    <div className='mx-auto flex max-w-5xl flex-col justify-between px-8'>
      <h3 className='text-3xl font-medium uppercase text-copy'>Our Team</h3>
      <div
        className={cn(
          'grid grid-cols-1 gap-12 py-10 md:grid-cols-2 lg:grid-cols-3'
        )}
      >
        {teamMembers.map((teamMember, idx) => (
          <TeamMemberCard key={idx} teamMember={teamMember} />
        ))}
      </div>
    </div>
  )
}

export default TeamSection
