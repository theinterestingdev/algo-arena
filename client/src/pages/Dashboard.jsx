import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Algo Arena, {user?.username}!</h1>
            <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Your Stats</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-blue-600 font-medium">Rating</p>
                        <p className="text-2xl font-bold">{user?.rating || 1200}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-sm text-green-600 font-medium">Problems Solved</p>
                        <p className="text-2xl font-bold">{user?.problemsSolved?.length || 0}</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-sm text-purple-600 font-medium">Member Since</p>
                        <p className="text-lg font-medium">
                            {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-left">
                        <h3 className="font-medium text-gray-900">Practice Problems</h3>
                        <p className="text-sm text-gray-500 mt-1">Solve coding challenges</p>
                    </button>
                    <button className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-left">
                        <h3 className="font-medium text-gray-900">1v1 Battle</h3>
                        <p className="text-sm text-gray-500 mt-1">Challenge other players</p>
                    </button>
                    <button className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-left">
                        <h3 className="font-medium text-gray-900">Leaderboard</h3>
                        <p className="text-sm text-gray-500 mt-1">See where you stand</p>
                    </button>
                    <button className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-left">
                        <h3 className="font-medium text-gray-900">Profile Settings</h3>
                        <p className="text-sm text-gray-500 mt-1">Update your information</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
