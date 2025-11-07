import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const TaskSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  priority: Yup.string().oneOf(["low", "medium", "high"]),
});

export default function TaskForm({ initialValues, onSubmit }) {
  const defaults = {
    title: "",
    desc: "",
    dueDate: "",
    priority: "medium",
    ...initialValues,
  };

  return (
    <Formik
      initialValues={defaults}
      validationSchema={TaskSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4 bg-white p-6 rounded shadow">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <Field name="title" className="w-full border rounded px-3 py-2" />
            <ErrorMessage name="title" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <Field as="textarea" name="desc" rows="3" className="w-full border rounded px-3 py-2" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1">Due Date</label>
              <Field name="dueDate" type="date" className="w-full border rounded px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Priority</label>
              <Field as="select" name="priority" className="w-full border rounded px-3 py-2">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Field>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Save
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
