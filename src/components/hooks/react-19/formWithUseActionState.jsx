import { useActionState } from 'react'

const Form = () => {

    const[state, formAction, isPending] = useActionState(action, undefined, false)

    async function action(prevState, FormData){

        await new Promise((resolve, reject) => setTimeout(resolve, 1000)) // just to use isPending

        const username = FormData.get("username")
        console.log(username)
        if(username.length < 3){
            return{
                success:false,
                message:'username must be atleast 3 characters long'
            }
        }

        return{
            success:true,
                message:`Username updated to ${username}`
        }
    }

  return (
    <div>
        <form action={formAction}>
            <input type="text" name="username" />
            <button type='submit' disabled={isPending} >{isPending ? 'Submitting...' : 'Submit'}</button>
            {state?.message && <p className={state.success ? 'text-green-500' : 'trext-red-500'}>{state.message}</p>}
            </form>
    </div>
  )
}

export default Form

// SUMMARY:
// The Flow of Events:

// Step 1: Initial Render

// The Form component renders for the first time.
// useActionState(action, '') is called.
// The hook initializes its internal state and returns three values:
// state: This is set to the initial state you provided, which is '' (an empty string).
// formAction: This is a special function created by React that is now linked to your action function.
// isPending: This is false because no action is currently running.
// The JSX is rendered:
// The <form> gets the special formAction function.
// The button is enabled (disabled={false}) and shows "Submit".
// The paragraph for the message is not rendered because state is an empty string, so state?.message is undefined.

// Step 2: User Interaction

// The user types "ab" into the username input field.
// The user clicks the "Submit" button.

// Step 3: Action Starts

// Because the form's action is set to formAction, React intercepts the submission.
// Immediately, the hook sets isPending to true.
// This triggers a re-render of the component:
// The button is now disabled (disabled={true}).
// The button text changes to "Submitting...".
// React then calls your action function in the background.

// Step 4: The action Function Executes

// Your async function action(prevState, formData) is invoked with two arguments:
// prevState: The value of state from the previous render. On the first submission, this is the initial state, so prevState is ''.
// formData: A FormData object containing all the data from the submitted form. In this case, it contains username: "ab".
// The code hits await new Promise(...). The function pauses here for 1 second. During this entire time, isPending remains true.
// After 1 second, the promise resolves and the function continues.
// const username = formData.get("username") extracts "ab".
// The if (username.length < 3) check is performed. Since 2 < 3 is true, the condition is met.
// The function returns the error object: { success: false, message: 'username must be atleast 3 characters long' }.

// Step 5: Action Finishes and State Updates

// The useActionState hook receives the return value from your action function.
// It does two things simultaneously:
// It updates its state variable to be the object you just returned.
// It sets isPending back to false.
// This state change triggers a final re-render of the component with the new values.

// Step 6: Final Render (Showing Feedback)

// The Form component re-renders.
// state is now { success: false, message: '...' }.
// isPending is false.
// The JSX is rendered:
// The button is re-enabled (disabled={false}) and shows "Submit" again.
// The condition {state?.message && ...} is now true. A <p> tag is rendered with the error message: "username must be atleast 3 characters long". Because state.success is false, it gets the red text color.

