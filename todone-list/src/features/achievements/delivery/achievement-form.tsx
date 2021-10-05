import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useDi } from '../../../core/dependency-injection/use-di'
import { CreateAchievementCmd } from '../application/create-achievement-cmd'

interface Form {
  name: string
  date: Date
}

export const AchievementForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>()

  const createAchievementCmd = useDi(CreateAchievementCmd)
  const onSubmit = handleSubmit(data => {
    createAchievementCmd.execute(data)
  })

  return (
    <section>
      <h2 className="foo">Hello world</h2>

      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input {...register('name', { required: true, minLength: 5 })} type="text" />
        {errors.name?.type === 'required' && <span>Field name is required</span>}
        {errors.name?.type === 'minLength' && <span>Field name should have length 5</span>}
        <button>Submit</button>
      </form>
    </section>
  )
}
