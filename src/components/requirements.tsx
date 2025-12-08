import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface IRequirement {
  title: string;
  description?: string;
}

interface GatherRequirementsFormValues {
  requirementTitle: string;
  requirementDescription: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<IRequirement[]>([]);
  const { register, handleSubmit, reset } = useForm<GatherRequirementsFormValues>();

  const onSubmit: SubmitHandler<GatherRequirementsFormValues> = (data) => {
    if (!data.requirementTitle.trim()) return;

    setRequirements([...requirements, { title: data.requirementTitle, description: data.requirementDescription }]);
    reset();
  };

  const removeRequirement = (index: number) => {
    const updatedRequirements = requirements.filter((_, i) => i !== index);
    setRequirements(updatedRequirements);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className={twMerge('text-3xl font-bold mb-6', 'text-center')}>Gather Requirements</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="requirementTitle" className="block text-sm font-medium">Requirement Title</label>
          <input
            id="requirementTitle"
            type="text"
            placeholder="Enter requirement title"
            {...register('requirementTitle', { required: true })}
            className={twMerge(
              'border-2 border-gray-300 rounded-md p-2 focus:border-blue-500',
              'focus:outline-none w-full'
            )}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="requirementDescription" className="block text-sm font-medium">Requirement Description</label>
          <textarea
            id="requirementDescription"
            placeholder="Enter requirement description"
            {...register('requirementDescription')}
            className={twMerge(
              'border-2 border-gray-300 rounded-md p-2 focus:border-blue-500',
              'focus:outline-none w-full'
            )}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Add Requirement
        </button>
      </form>

      {requirements.length > 0 && (
        <ul className="mt-6 space-y-3">
          {requirements.map((requirement, index) => (
            <li key={index} className="flex justify-between items-center p-4 border-b border-gray-200">
              <div>
                <h4>{requirement.title}</h4>
                {requirement.description && <p className="text-sm">{requirement.description}</p>}
              </div>
              <button onClick={() => removeRequirement(index)} className="bg-red-500 text-white px-2 py-1 rounded">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface IRequirement {
  title: string;
  description?: string;
}

interface GatherRequirementsFormValues {
  requirementTitle: string;
  requirementDescription: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<IRequirement[]>([]);
  const { register, handleSubmit, reset } = useForm<GatherRequirementsFormValues>();

  const onSubmit: SubmitHandler<GatherRequirementsFormValues> = (data) => {
    if (!data.requirementTitle.trim()) return;

    setRequirements([...requirements, { title: data.requirementTitle, description: data.requirementDescription }]);
    reset();
  };

  const removeRequirement = (index: number) => {
    const updatedRequirements = requirements.filter((_, i) => i !== index);
    setRequirements(updatedRequirements);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className={twMerge('text-3xl font-bold mb-6', 'text-center')}>Gather Requirements</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="requirementTitle" className="block text-sm font-medium">Requirement Title</label>
          <input
            id="requirementTitle"
            type="text"
            placeholder="Enter requirement title"
            {...register('requirementTitle', { required: true })}
            className={twMerge(
              'border-2 border-gray-300 rounded-md p-2 focus:border-blue-500',
              'focus:outline-none w-full'
            )}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="requirementDescription" className="block text-sm font-medium">Requirement Description</label>
          <textarea
            id="requirementDescription"
            placeholder="Enter requirement description"
            {...register('requirementDescription')}
            className={twMerge(
              'border-2 border-gray-300 rounded-md p-2 focus:border-blue-500',
              'focus:outline-none w-full'
            )}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Add Requirement
        </button>
      </form>

      {requirements.length > 0 && (
        <ul className="mt-6 space-y-3">
          {requirements.map((requirement, index) => (
            <li key={index} className="flex justify-between items-center p-4 border-b border-gray-200">
              <div>
                <h4>{requirement.title}</h4>
                {requirement.description && <p className="text-sm">{requirement.description}</p>}
              </div>
              <button onClick={() => removeRequirement(index)} className="bg-red-500 text-white px-2 py-1 rounded">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GatherRequirements;