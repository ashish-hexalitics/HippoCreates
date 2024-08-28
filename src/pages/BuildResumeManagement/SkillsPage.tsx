function SkillsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-400 p-6">
          <h1 className="text-3xl font-bold text-white">Let’s talk about your skills</h1>
          <p className="text-gray-200 mt-2">
            Highlight your strengths and key skills relevant to the job you’re applying for.
          </p>
        </div>
        <div className="p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Skill</label>
              <input
                type="text"
                className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-indigo-400"
                placeholder="E.g., Project Management"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Proficiency Level</label>
              <select className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-indigo-400">
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
                <option>Expert</option>
              </select>
            </div>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full mt-4">
              Add Skill
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
